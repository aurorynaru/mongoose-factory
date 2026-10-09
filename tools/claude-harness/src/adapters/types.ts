/** Ports between the controller and the outside world. Real and fake implementations share these. */

export type ChatRole = "coordinator" | "specialist";

export type ChatProblem =
  | "not_configured"
  | "browser_unavailable"
  | "login_required"
  | "human_verification"
  | "conversation_missing"
  | "role_mismatch"
  | "rate_limited"
  | "visible_error"
  | "composer_missing"
  | "model_mismatch";
// Claude roles preserve expected subscription pauses separately from browser errors.
export type ClaudeChatProblem = ChatProblem | "usage_limit" | "permission_denied" | "submission_uncertain";

export interface ReadyStatus {
  ok: boolean;
  /** Visible label of the model/effort selector, when the page shows one. */
  modelLabel?: string | null;
  problem?: ClaudeChatProblem;
  detail?: string;
  url?: string;
}

export interface SubmissionCheck {
  conversationUrl?: string;
  /** false when the conversation could not be inspected reliably (the answer is unknown). */
  reliable: boolean;
  found: boolean;
  userMessageId?: string;
  detail?: string;
}

export type SubmitOutcome =
  | { status: "accepted"; userMessageId?: string }
  | { status: "not_submitted"; detail: string }
  | { status: "uncertain"; detail: string }
  | { status: "blocked"; problem: ClaudeChatProblem; detail: string };

export type ReplyOutcome =
  | { status: "complete"; messageId: string; markdown: string }
  | { status: "timeout"; detail: string }
  | { status: "interrupted" }
  | { status: "blocked"; problem: ClaudeChatProblem; detail: string };

export interface ChatPort {
  transport?(role:ChatRole):"chatgpt"|"claude";
  checkReady(role: ChatRole): Promise<ReadyStatus>;
  /** Look for a user message carrying this nonce. Reloads/rechecks as needed to be definitive. */
  findSubmission(role: ChatRole, nonce: string): Promise<SubmissionCheck>;
  submit(role: ChatRole, text: string, nonce: string): Promise<SubmitOutcome>;
  /**
   * Start a NEW conversation at homeUrl (ChatGPT home, or the custom GPT's page) with this first
   * message. On acceptance returns the new conversation URL, which the caller registers for the role.
   */
  submitNew(role: ChatRole, homeUrl: string, text: string, nonce: string): Promise<SubmitOutcome & { conversationUrl?: string }>;
  /** Wait for the assistant reply that follows the user message carrying `nonce`. */
  waitForReply(role: ChatRole, nonce: string, opts: { timeoutMs: number; shouldStop: () => boolean }): Promise<ReplyOutcome>;
  close(): Promise<void>;
}

export type Presence = "present" | "absent" | "unknown";

export interface WorkerToolPolicy {
  denyBrowserJavaScript: boolean;
  preamble?: string;
  allowLiteralKeyText?: boolean;
  exactValues?: string[];
  maxIdenticalCalls?: number;
}

export interface PermissionDenial {
  tool_name: string;
  tool_use_id?: string;
  tool_input?: Record<string, unknown>;
}

export type WorkerResult =
  | { status: "completed"; text: string; transcript: string; assistantMessageIds: string[]; touchedFiles: string[]; cost: number; tokens: number; permissionDenials?: PermissionDenial[]; warning?: string }
  | { status: "failed"; error: string; text: string; transcript: string; assistantMessageIds: string[] }
  | { status: "stalled"; detail: string; aborted: boolean; text: string; transcript: string; assistantMessageIds: string[] }
  | { status: "blocked"; kind: "permission" | "question"; detail: string; permissionDenials?: PermissionDenial[] }
  | { status: "timeout"; detail: string }
  | { status: "interrupted" }
  | { status: "usage_limit"; detail: string; text: string; transcript: string; assistantMessageIds: string[] }
  | { status: "model_mismatch"; detail: string }
  | { status: "turn_limit"; detail: string; text: string; transcript: string; assistantMessageIds: string[] }
  | { status: "backend_unavailable"; detail: string };

export interface WorkerPort {
  windowState?():Promise<import("../backend/chrome-window.js").ChromeWindow>;
  selectModel?(model:{model:string;effort:"low"|"medium"|"high"|"xhigh"|"max"|null}):void;
  releaseUsagePause?(sessionId:string,messageId:string):Promise<void>;
  /** Optional Claude task context; separate from the saved controller payload. */
  setTaskPreamble?(sessionId: string, preamble: string): Promise<void>;
  health(): Promise<{ ok: boolean; version?: string; detail?: string }>;
  createSession(title: string): Promise<string>;
  /** Restrict an idle session before submitting; failure must prevent submission. */
  configureSession(sessionId: string, policy: WorkerToolPolicy): Promise<void>;
  newMessageId(): string;
  findMessage(sessionId: string, messageId: string): Promise<Presence>;
  submit(sessionId: string, messageId: string, text: string): Promise<{ status: "accepted" | "uncertain" | "rejected"; detail?: string }>;
  waitForCompletion(sessionId: string, messageId: string, opts: { timeoutMs: number; shouldStop: () => boolean }): Promise<WorkerResult>;
  abort(sessionId: string): Promise<boolean>;
  /** Restart ONLY the controller-owned backend. Returns false if not owned / not permitted. */
  restartOwnedBackend(): Promise<boolean>;
}

export interface InterpreterUsage {
  promptTokens: number;
  completionTokens: number;
  costUsd: number;
}

export interface InterpreterResult {
  found: boolean;
  confidence: "high" | "medium" | "low";
  candidate: Record<string, unknown> | null;
  unresolved: string[];
  usage: InterpreterUsage;
}

export interface InterpreterPort {
  interpret(raw: string, expected: { runId: string; experimentId: string; cycleId: number }): Promise<InterpreterResult>;
}
