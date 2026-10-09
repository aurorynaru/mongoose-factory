import type { ChatRole } from "./types.js";
import type { Store } from "../store.js";
import { parseConversationUrl } from "./chatgpt/selectors.js";
export function recordConversation(store:Store,role:ChatRole,reference:string) {
  if(/^claude-session:[\da-f]{8}-(?:[\da-f]{4}-){3}[\da-f]{12}$/i.test(reference)) {
    store.setSetting(`claude:conversation:${role}`,reference);return;
  }
  const parsed=parseConversationUrl(reference);if(!parsed)throw Error("Invalid conversation reference");
  store.setRole(role,{url:parsed.canonical,conversationId:parsed.conversationId,gptId:parsed.gptId??(role==="specialist"?store.getRole(role)?.gpt_id??null:null),title:null});
}
