import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ExternalSecondOpinion, EXTERNAL_LABEL, type ExternalConversation } from "../src/adapters/claude/chat.js";
import { read } from "../src/adapters/claude/files.js";
import type { ChatPort } from "../src/adapters/types.js";
import { FakeChat, type ReplySpec } from "../src/testing/fakes.js";
import { harness } from "../src/testing/scenario.js";
import { ConfigSchema, resolvePaths } from "../src/config.js";

const registeredUrl="https://chatgpt.com/g/g-fakegpt-mongoose/c/registered-chat";
const opts={timeoutMs:100,shouldStop:()=>false};
const disposables:Array<()=>void>=[];
afterEach(()=>{disposables.splice(0).forEach(close=>close());vi.restoreAllMocks();});
function fixture(script:ReplySpec[]=["one","two","three","four"]) {
  const h=harness({coordinator:[]}),paths=resolvePaths(h.config);disposables.push(()=>h.store.close());
  const chat=new FakeChat({coordinator:[],specialist:script});
  const bindings:Array<{url:string;runId:string;action:string}>=[];
  const conversations={registeredUrl:()=>registeredUrl,chatForUrl:(url:string,runId:string):ChatPort=>({
    checkReady:role=>{bindings.push({url,runId,action:"ready"});return chat.checkReady(role);},
    findSubmission:(role,nonce)=>{bindings.push({url,runId,action:"find"});return chat.findSubmission(role,nonce);},
    submit:(role,text,nonce)=>{bindings.push({url,runId,action:"submit"});return chat.submit(role,text,nonce);},
    submitNew:(role,home,text,nonce)=>chat.submitNew(role,home,text,nonce),
    waitForReply:(role,nonce,o)=>{bindings.push({url,runId,action:"reply"});return chat.waitForReply(role,nonce,o);},
    close:()=>chat.close(),
  })};
  const broker=()=>new ExternalSecondOpinion(h.config,paths,chat,conversations);
  const conversation=(runId:string)=>read<ExternalConversation>(join(paths.runsDir,runId,"external-second-opinion/conversation.json"));
  return {...h,chat,bindings,broker,conversation,conversations};
}

describe("run-scoped external GPT conversations (fakes only)",()=>{
  it("defaults missing newChatPerRun to true and accepts false",()=>{
    expect(ConfigSchema.parse({externalSecondOpinion:{enabled:true,maxPerRun:2}}).externalSecondOpinion.newChatPerRun).toBe(true);
    expect(ConfigSchema.parse({externalSecondOpinion:{newChatPerRun:false}}).externalSecondOpinion.newChatPerRun).toBe(false);
  });
  it("opens the registered GPT once per run, logs its URL, and reuses it after broker restart",async()=>{
    const h=fixture(),ready=vi.spyOn(h.chat,"checkReady");
    const one=await h.broker().ask("R-first","one","Q1",opts);
    expect(one).toMatchObject({status:"complete",markdown:expect.stringContaining(EXTERNAL_LABEL)});
    expect(ready).not.toHaveBeenCalled(); // submitNew owns the new-page model/effort check.
    expect(h.chat.newChats).toHaveLength(1);
    expect(h.chat.newChats[0]).toMatchObject({role:"specialist",homeUrl:"https://chatgpt.com/g/g-fakegpt-mongoose"});
    const first=h.conversation("R-first");expect(first).toMatchObject({registeredUrl,newChat:true,url:h.chat.newChats[0].url});
    expect(h.bindings).toContainEqual({runId:"R-first",url:first.url,action:"reply"});
    expect(await h.broker().ask("R-first","one","Q1",opts)).toEqual(one);
    await h.broker().ask("R-first","two","Q2",opts);
    expect(h.chat.newChats).toHaveLength(1);
    expect(h.bindings).toContainEqual({runId:"R-first",url:first.url,action:"submit"});
    await h.broker().ask("R-second","one","Q3",opts);
    const second=h.conversation("R-second");expect(second.url).not.toBe(first.url);expect(h.chat.newChats).toHaveLength(2);
    expect(h.conversations.registeredUrl()).toBe(registeredUrl);
    const before=h.chat.submissions.length;
    expect(await h.broker().ask("R-first","three","Q4",opts)).toMatchObject({status:"complete",markdown:expect.stringContaining("per-run limit reached")});
    expect(h.chat.submissions).toHaveLength(before);
  });
  it("false reuses the registered conversation without submitNew and logs its run binding",async()=>{
    const h=fixture();h.config.externalSecondOpinion.newChatPerRun=false;
    await h.broker().ask("R-reuse","one","Q1",opts);await h.broker().ask("R-reuse","two","Q2",opts);
    expect(h.chat.newChats).toEqual([]);expect(h.chat.submissions).toHaveLength(2);
    expect(h.conversation("R-reuse")).toMatchObject({url:registeredUrl,newChat:false});
    expect(h.bindings.filter(b=>b.action==="submit")).toEqual([{runId:"R-reuse",url:registeredUrl,action:"submit"},{runId:"R-reuse",url:registeredUrl,action:"submit"}]);
  });
  it("preserves a confirmed URL across reply timeout and resume without another submission",async()=>{
    const h=fixture(),wait=vi.spyOn(h.chat,"waitForReply").mockResolvedValueOnce({status:"timeout",detail:"fixture timeout"});
    expect(await h.broker().ask("R-timeout","one","Q1",opts)).toMatchObject({status:"timeout"});
    const url=h.conversation("R-timeout").url;
    expect(await h.broker().ask("R-timeout","one","Q1",opts)).toMatchObject({status:"complete"});
    expect(wait).toHaveBeenCalledTimes(2);expect(h.chat.submissions).toHaveLength(1);expect(h.chat.newChats).toHaveLength(1);
    expect(h.bindings.filter(b=>b.action==="reply").every(b=>b.url===url)).toBe(true);
  });
  it("pauses a new-page model mismatch and retries only the unsent first request",async()=>{
    const h=fixture(),submit=vi.spyOn(h.chat,"submitNew").mockResolvedValueOnce({status:"blocked",problem:"model_mismatch",detail:"new GPT page is Low"});
    expect(await h.broker().ask("R-model","one","Q1",opts)).toMatchObject({status:"blocked",problem:"model_mismatch"});
    expect(h.chat.submissions).toEqual([]);expect(h.conversation("R-model").url).toBeNull();
    await h.broker().ask("R-model","one","Q1",opts);expect(submit).toHaveBeenCalledTimes(2);
    expect(submit.mock.calls[0][3]).toBe(submit.mock.calls[1][3]);expect(h.chat.submissions).toHaveLength(1);
  });
  it.each(["uncertain_accepted","uncertain_lost"] as const)("never replays an %s new-chat send or sends a later request without its URL",async submit=>{
    const h=fixture([{submit,prose:"unknown"}]);
    expect(await h.broker().ask("R-uncertain","one","Q1",opts)).toMatchObject({status:"blocked"});
    expect(await h.broker().ask("R-uncertain","one","Q1",opts)).toMatchObject({status:"blocked",problem:"submission_uncertain"});
    expect(await h.broker().ask("R-uncertain","two","Q2",opts)).toMatchObject({status:"blocked",problem:"submission_uncertain"});
    expect(h.chat.submissions).toHaveLength(1);expect(h.conversation("R-uncertain").url).toBeNull();
  });
  it.each([undefined,"https://chatgpt.com/g/g-other-gpt/c/another-chat"])("rejects missing or wrong-GPT new URLs without replay",async conversationUrl=>{
    const h=fixture();vi.spyOn(h.chat,"submitNew").mockResolvedValue({status:"accepted",conversationUrl});
    expect(await h.broker().ask("R-bad-url","one","Q1",opts)).toMatchObject({status:"blocked",problem:"submission_uncertain"});
    expect(await h.broker().ask("R-bad-url","one","Q1",opts)).toMatchObject({status:"blocked",problem:"submission_uncertain"});
    expect(h.chat.submitNew).toHaveBeenCalledTimes(1);
  });
  it("requires a registered custom GPT before sending",async()=>{
    const h=fixture();h.conversations.registeredUrl=()=>"https://chatgpt.com/c/registered-chat";
    expect(await h.broker().ask("R-unregistered","one","Q1",opts)).toMatchObject({status:"blocked",problem:"not_configured"});
    expect(h.chat.submissions).toEqual([]);
  });
});
