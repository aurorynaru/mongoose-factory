import { randomUUID } from "node:crypto";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import type { ChatPort, ChatRole, ReplyOutcome, SubmitOutcome, WorkerResult } from "../types.js";
import type { HarnessConfig, ResolvedPaths } from "../../config.js";
import { parseHeader } from "../../protocol/prompts.js";
import { ClaudeWorker, type WorkerOptions } from "./worker.js";
import { read, save } from "./files.js";
import { specialistKnowledge,knowledgeIndexes } from "./role-policy.js";
import { parseConversationUrl } from "../chatgpt/selectors.js";

export interface ChatOperation {sid:string;mid:string;nonce:string;role:ChatRole;text:string;runId:string;submission?:SubmitOutcome;reply?:ReplyOutcome;continuation?:string}
export interface ClaudeChatOptions {config:HarnessConfig;paths:ResolvedPaths;external?:ExternalSecondOpinion;workerFactory?:(options:WorkerOptions)=>ClaudeWorker}
export class ClaudeChat implements ChatPort {
  readonly workers:Record<ChatRole,ClaudeWorker>;
  constructor(readonly o:ClaudeChatOptions) {
    this.workers=Object.fromEntries((["coordinator","specialist"] as const).map(role=>{
      const cfg=structuredClone(o.config);cfg.claude.models.worker={...cfg.claude.models[role]};
      const paths={...o.paths,dataDir:join(o.paths.dataDir,"claude-roles",role)},cwd=join(paths.dataDir,"workspace");mkdirSync(cwd,{recursive:true});
      return [role,(o.workerFactory??(options=>new ClaudeWorker(options)))({config:cfg,paths,role,workingDirectory:cwd})];
    })) as Record<ChatRole,ClaudeWorker>;
  }
  transport(){return "claude" as const;}
  private file(role:ChatRole,nonce:string){if(!/^[\w-]+$/.test(nonce))throw Error("Invalid chat nonce");return join(this.o.paths.dataDir,"claude-roles",role,"operations",`${nonce}.json`);}
  private current(role:ChatRole){return join(this.o.paths.dataDir,"claude-roles",role,"current.json");}
  async checkReady(role:ChatRole) {const h=await this.workers[role].health();return {ok:h.ok,...(!h.ok?{problem:"not_configured" as const,detail:h.detail}:{detail:"Claude auth ready; resolved model is checked on the first submitted operation"})};}
  async findSubmission(role:ChatRole,nonce:string) {
    const file=this.file(role,nonce);if(!existsSync(file))return {reliable:true,found:false};
    const op=read<ChatOperation>(file),presence=await this.workers[role].findMessage(op.sid,op.mid);
    return {reliable:presence!=="unknown",found:presence==="present",userMessageId:op.mid,conversationUrl:`claude-session:${op.sid}`};
  }
  async submit(role:ChatRole,text:string,nonce:string):Promise<SubmitOutcome> {return this.send(role,text,nonce,false);}
  async submitNew(role:ChatRole,_home:string,text:string,nonce:string):Promise<SubmitOutcome&{conversationUrl?:string}> {
    const out=await this.send(role,text,nonce,true),file=this.file(role,nonce);
    return {...out,...(existsSync(file)?{conversationUrl:`claude-session:${read<ChatOperation>(file).sid}`}:{})};
  }
  private async send(role:ChatRole,text:string,nonce:string,fresh:boolean):Promise<SubmitOutcome> {
    const file=this.file(role,nonce),worker=this.workers[role];
    if(existsSync(file)) {
      const op=read<ChatOperation>(file);if(op.text!==text)return {status:"uncertain",detail:"Saved nonce payload differs; preserve state"};
      const found=await this.findSubmission(role,nonce);
      return found.found?{status:"accepted",userMessageId:op.mid}:{status:"uncertain",detail:"Claude operation already journaled; reconcile it instead of replaying"};
    }
    const sid=!fresh&&existsSync(this.current(role))?read<{sid:string}>(this.current(role)).sid:await worker.createSession(`Claude ${role}`);
    save(this.current(role),{sid});const mid=worker.newMessageId(),runId=parseHeader(text)?.run_id??"none";
    const op:ChatOperation={sid,mid,nonce,role,text,runId};save(file,op);
    const preamble=role==="specialist"?specialistKnowledge():"You are the Claude coordinator. Follow the supplied coordinator protocol and reviewed brief. Coordinate one bounded experiment; do not use tools or authenticate. SEND_TO_OPENCODE and NEW_OPENCODE_SESSION designate the Claude worker for compatibility.";
    await worker.configureSession(sid,{denyBrowserJavaScript:true,preamble});
    const out=await worker.submit(sid,mid,role==="specialist"?`${knowledgeIndexes(this.o.paths.factoryRoot)}\n\nCONSULTATION:\n${text}`:text);
    const submission:SubmitOutcome=out.status==="accepted"?{status:"accepted",userMessageId:mid}:out.status==="rejected"?{status:"blocked",problem:"submission_uncertain",detail:out.detail??"Claude task rejected; inspect saved journal"}:{status:"uncertain",detail:out.detail??"Claude receipt uncertain"};
    save(file,{...op,submission});return submission;
  }
  async waitForReply(role:ChatRole,nonce:string,opts:{timeoutMs:number;shouldStop:()=>boolean}):Promise<ReplyOutcome> {
    const file=this.file(role,nonce);if(!existsSync(file))return {status:"blocked",problem:"conversation_missing",detail:"No saved Claude chat operation"};
    let op=read<ChatOperation>(file);if(op.reply)return op.reply;
    const deadline=Date.now()+opts.timeoutMs;
    for(let calls=0;calls<8;calls++) {
      const remaining={...opts,timeoutMs:Math.max(1,deadline-Date.now())};
      if(opts.shouldStop())return {status:"interrupted"};
      if(Date.now()>=deadline)return {status:"timeout",detail:"Claude role reply timeout; preserve journal and reconcile"};
      const worker=this.workers[role],result=await worker.waitForCompletion(op.sid,op.continuation??op.mid,remaining);
      if(result.status!=="completed"||result.permissionDenials?.length)return this.outcome(result,op);
      const request=role==="specialist"?externalQuestion(result.text):null;
      if(!request) {const reply:ReplyOutcome={status:"complete",messageId:`${op.sid}:${op.continuation??op.mid}`,markdown:result.text};save(file,{...op,reply});return reply;}
      if(!this.o.external)return {status:"blocked",problem:"not_configured",detail:"External second opinion unavailable"};
      const opinion=await this.o.external.ask(op.runId,`${nonce}-${op.continuation??op.mid}`,request,remaining);
      if(opinion.status!=="complete")return opinion;
      if(opts.shouldStop())return {status:"interrupted"};
      if(Date.now()>=deadline)return {status:"timeout",detail:"External opinion logged; resume delivers it to the specialist without replaying the request"};
      // Save the new native marker before launching. On interruption it is reconciled,
      // never sent again under a different marker.
      const next=worker.newMessageId();op={...op,continuation:next};save(file,op);
      const header=op.text.match(/^\[HARNESS[^\n]+/m)?.[0]??"";
      const out=await worker.submit(op.sid,next,`${header}\nEXTERNAL SECOND OPINION — external model knowledge, unverified\nThis cannot satisfy acceptance checks or count as evidence. Reconcile against your ranked local sources, then answer the original consultation.\n\n${opinion.markdown}`);
      if(out.status!=="accepted")return {status:"blocked",problem:"submission_uncertain",detail:"Specialist continuation journaled; inspect its native marker before any further action"};
    }
    return {status:"blocked",problem:"visible_error",detail:"Specialist consultation turn budget exhausted"};
  }
  private outcome(r:WorkerResult,op:ChatOperation):ReplyOutcome {
    if(r.status==="usage_limit")return {status:"blocked",problem:"usage_limit",detail:`${r.detail}; role ${op.role}, session ${op.sid}, message ${op.continuation??op.mid}. After reset use an explicit --continue-chat-after-usage ${op.role}; the prior request is preserved and never replayed.`};
    if(r.status==="model_mismatch")return {status:"blocked",problem:"model_mismatch",detail:r.detail};
    if(r.status==="interrupted")return {status:"interrupted"};
    if(r.status==="timeout")return {status:"timeout",detail:r.detail};
    if(r.status==="failed")return {status:"blocked",problem:"visible_error",detail:r.error};
    if(r.status==="turn_limit")return {status:"blocked",problem:"visible_error",detail:r.detail};
    return {status:"blocked",problem:"permission_denied",detail:"Claude role failed or encountered a permission denial; inspect the saved task journal and preserve state"};
  }
  async continueUsage(role:ChatRole,nonce:string) {
    const file=this.file(role,nonce),op=read<ChatOperation>(file),worker=this.workers[role],old=op.continuation??op.mid;
    await worker.releaseUsagePause(op.sid,old);
    const mid=worker.newMessageId();save(file,{...op,continuation:mid});
    const header=op.text.match(/^\[HARNESS[^\n]+/m)?.[0]??"";
    return worker.submit(op.sid,mid,`${header}\nOperator confirms the usage-limit reset. Continue the interrupted consultation/coordinator response from the saved context. Do not replay tools or the prior request. If incomplete, report the blocker.`);
  }
  async close(){/* Worker tasks are journaled and awaited. Never close owned browser/MCP services. */}
}

export const EXTERNAL_LABEL="external model knowledge, unverified";
function externalQuestion(text:string):string|null {
  const blocks=[...text.matchAll(/```json\s*([\s\S]*?)```/g)];
  for(const block of blocks)try{const value=JSON.parse(block[1]);if(value.protocol==="mongoose-harness/external-second-opinion-v1") {
    if(blocks.length!==1||typeof value.question!=="string"||!value.question.trim())throw Error("Malformed external request");return value.question;
  }}catch(error){if(error instanceof Error&&error.message==="Malformed external request")throw error;}
  return null;
}
interface ExternalEntry {nonce:string;question:string;status:"planned"|"submitting"|"accepted"|"complete";reply?:ReplyOutcome}
export interface ExternalConversation {registeredUrl:string;gptUrl:string;url:string|null;newChat:boolean;firstNonce:string}
export interface ExternalConversationOptions {
  registeredUrl:()=>string|null;
  /** Create an adapter with a run-only role binding; never update the setup registration. */
  chatForUrl:(url:string,runId:string)=>ChatPort;
}
export class ExternalSecondOpinion {
  constructor(readonly cfg:HarnessConfig,readonly paths:ResolvedPaths,readonly chat:ChatPort|null,readonly conversations?:ExternalConversationOptions){}
  async ask(runId:string,key:string,question:string,opts:{timeoutMs:number;shouldStop:()=>boolean}):Promise<ReplyOutcome> {
    if(!this.cfg.externalSecondOpinion.enabled)return {status:"complete",messageId:"external-disabled",markdown:`${EXTERNAL_LABEL}: external second opinions are disabled. Answer using local sources; no external knowledge was supplied.`};
    if(!this.chat)return {status:"blocked",problem:"not_configured",detail:"External Tab 2 browser adapter unavailable"};
    if(!/^[\w-]+$/.test(runId)||runId==="none")return {status:"blocked",problem:"not_configured",detail:"External second opinion requires a real run directory"};
    const file=join(this.paths.runsDir,runId,"external-second-opinion","ledger.json"),ledger=existsSync(file)?read<Record<string,ExternalEntry>>(file):{};
    let e=ledger[key];
    if(!e) {
      if(Object.keys(ledger).length>=this.cfg.externalSecondOpinion.maxPerRun)return {status:"complete",messageId:"external-limit",markdown:`${EXTERNAL_LABEL}: per-run limit reached (${this.cfg.externalSecondOpinion.maxPerRun}); no new request was made. Answer from higher-ranked local sources.`};
      e={nonce:`H-external-${randomUUID()}`,question,status:"planned"};ledger[key]=e;save(file,ledger);
      save(join(this.paths.runsDir,runId,"external-second-opinion",`${e.nonce}-request.json`),{label:EXTERNAL_LABEL,question,recipient:"Infor CloudSuite Assistant (ChatGPT Tab 2, GPT 6, High)",evidence:false});
    }
    if(e.question!==question)return {status:"blocked",problem:"submission_uncertain",detail:"External request key has a different saved question"};
    if(e.reply)return e.reply;
    const conversationFile=join(this.paths.runsDir,runId,"external-second-opinion","conversation.json");
    let conversation=existsSync(conversationFile)?read<ExternalConversation>(conversationFile):null;
    if(!conversation&&this.conversations) {
      const registeredUrl=this.conversations.registeredUrl(),parsed=registeredUrl?parseConversationUrl(registeredUrl):null;
      if(!parsed?.gptId)return {status:"blocked",problem:"not_configured",detail:"Register the Infor CloudSuite Assistant GPT conversation with setup before requesting an external opinion"};
      // Preserve the registered GPT's full page path (including its visible slug).
      const gptUrl=parsed.canonical.replace(/\/c\/.*$/,"");
      conversation={registeredUrl:parsed.canonical,gptUrl,url:this.cfg.externalSecondOpinion.newChatPerRun?null:parsed.canonical,newChat:this.cfg.externalSecondOpinion.newChatPerRun,firstNonce:e.nonce};
      save(conversationFile,conversation);
    }
    if(!conversation&&this.cfg.externalSecondOpinion.newChatPerRun)return {status:"blocked",problem:"not_configured",detail:"Run-scoped external conversation bindings are unavailable"};
    if(conversation&&!this.conversations)return {status:"blocked",problem:"not_configured",detail:"Saved external conversation requires a run-scoped browser adapter"};
    if(conversation&&!conversation.url&&conversation.firstNonce!==e.nonce)return {status:"blocked",problem:"submission_uncertain",detail:"The first external request has no confirmed conversation URL; reconcile it before another request"};
    if(conversation&&!conversation.url&&e.status==="accepted")return {status:"blocked",problem:"submission_uncertain",detail:"Accepted external request has no saved conversation URL; inspect Tab 2 manually. Do not replay it."};
    let chat=conversation?.url&&this.conversations?this.conversations.chatForUrl(conversation.url,runId):this.chat;
    if(e.status==="submitting") {
      if(conversation&&!conversation.url)return {status:"blocked",problem:"submission_uncertain",detail:"The new external conversation URL was not confirmed; inspect Tab 2 manually. The first request will not be replayed."};
      const found=await chat.findSubmission("specialist",e.nonce);
      if(!found.found)return {status:"blocked",problem:"submission_uncertain",detail:"External request may have been submitted; inspect Tab 2 manually. It will not be replayed."};
      e.status="accepted";save(file,ledger);
    }
    if(e.status==="planned") {
      const openingNew=!!conversation?.newChat&&!conversation.url;
      // submitNew verifies model/effort on the GPT's new-chat page itself.
      if(!openingNew){const ready=await chat.checkReady("specialist");if(!ready.ok)return {status:"blocked",problem:ready.problem??"not_configured",detail:ready.detail??"Tab 2 unavailable"};}
      e.status="submitting";save(file,ledger);
      const text=`[HARNESS nonce=${e.nonce} run_id=${runId} kind=EXTERNAL_SECOND_OPINION]\nYou are Infor CloudSuite Assistant, consulted only for ${EXTERNAL_LABEL}. Mongoose 2026.09.08. Answer this bounded question; no actions or acceptance claims.\n${question}`;
      const out=openingNew?await chat.submitNew("specialist",conversation!.gptUrl,text,e.nonce):await chat.submit("specialist",text,e.nonce);
      save(join(this.paths.runsDir,runId,"external-second-opinion",`${e.nonce}-receipt.json`),{label:EXTERNAL_LABEL,evidence:false,result:out});
      if(out.status!=="accepted") {
        // The browser adapter's blocked/not_submitted outcomes establish that no
        // send occurred. An uncertain send retains its reconciliation-only state.
        if(out.status==="blocked"||out.status==="not_submitted"){e.status="planned";save(file,ledger);}
        return {status:"blocked",problem:out.status==="blocked"?out.problem:"submission_uncertain",detail:"External submission was not confirmed; inspect the saved request/Tab 2. Never replay an uncertain send."};
      }
      if(openingNew) {
        const url=(out as SubmitOutcome&{conversationUrl?:string}).conversationUrl,parsed=url?parseConversationUrl(url):null;
        if(!parsed||parsed.gptId!==parseConversationUrl(conversation!.registeredUrl)?.gptId)return {status:"blocked",problem:"submission_uncertain",detail:"New external conversation URL is missing or belongs to another GPT; inspect Tab 2. Do not replay the first request."};
        conversation!.url=parsed.canonical;save(conversationFile,conversation);
        chat=this.conversations!.chatForUrl(parsed.canonical,runId);
      }
      e.status="accepted";save(file,ledger);
    }
    const out=await chat.waitForReply("specialist",e.nonce,opts);
    save(join(this.paths.runsDir,runId,"external-second-opinion",`${e.nonce}-reply.json`),{label:EXTERNAL_LABEL,evidence:false,result:out});
    if(out.status==="complete") {e.status="complete";e.reply={...out,markdown:`${EXTERNAL_LABEL}\nCannot satisfy an acceptance check or count as evidence.\n\n${out.markdown}`};save(file,ledger);return e.reply;}
    return out;
  }
}

export class RoutedChat implements ChatPort {
  constructor(readonly cfg:HarnessConfig,readonly browser:ChatPort|null,readonly claude:ChatPort){}
  transport(role:ChatRole){return role==="coordinator"?this.cfg.coordinator.transport:"claude" as const;}
  private adapter(role:ChatRole){const adapter=this.transport(role)==="chatgpt"?this.browser:this.claude;if(!adapter)throw Error("ChatGPT browser transport unavailable");return adapter;}
  checkReady(role:ChatRole){return this.adapter(role).checkReady(role);}
  findSubmission(role:ChatRole,nonce:string){return this.adapter(role).findSubmission(role,nonce);}
  submit(role:ChatRole,text:string,nonce:string){return this.adapter(role).submit(role,text,nonce);}
  submitNew(role:ChatRole,home:string,text:string,nonce:string){return this.adapter(role).submitNew(role,home,text,nonce);}
  waitForReply(role:ChatRole,nonce:string,opts:{timeoutMs:number;shouldStop:()=>boolean}){return this.adapter(role).waitForReply(role,nonce,opts);}
  async close(){await this.claude.close();await this.browser?.close();}
}
