import type { Page } from "playwright";
import { describe,expect,it,vi } from "vitest";
import { ChatGptAdapter } from "../src/adapters/chatgpt/adapter.js";
import { SELECTORS } from "../src/adapters/chatgpt/selectors.js";
import { MemoryLogger } from "../src/util/log.js";

// Semantic menu fakes only: no Playwright browser/context/page is created.
function menuFake(selected="6",effort="High",offered=["6","6 Pro"],auto=true) {
  const state={selected,effort,visible:false,clicks:[] as string[]};
  const button={count:async()=>1,nth:()=>button,isVisible:async()=>true,click:async()=>{state.visible=true;state.clicks.push("menu");}};
  const menu={first:()=>menu,isVisible:async()=>state.visible,waitFor:async()=>{if(!state.visible)throw Error("closed");}};
  const models={count:async()=>offered.length,nth:(index:number)=>({click:async()=>{state.selected=offered[index];state.clicks.push(offered[index]);state.visible=false;}})};
  const power={first:()=>power,count:async()=>1,focus:async()=>{}};
  const page={locator:(selector:string)=>selector===SELECTORS.modelMenu?menu:selector===`${SELECTORS.modelMenu} ${SELECTORS.modelMenuModel}`?models:selector.includes(SELECTORS.modelMenuPower)?power:button,
    evaluate:async()=>({effort:state.effort,models:offered.map(text=>({text,checked:text===state.selected}))}),
    keyboard:{press:async(key:string)=>{if(key==="Escape")state.visible=false;else if(key==="ArrowRight")state.effort="High";}}
  } as unknown as Page;
  const adapter=new ChatGptAdapter({pages:()=>[],newPage:async()=>page,roles:()=>null,log:new MemoryLogger(),submitConfirmMs:10,stableMs:1,navigationTimeoutMs:10,desiredModel:()=>({model:"6",effort:"High"}),expectedModelLabel:()=>"High",autoSelectModel:auto});
  return {adapter,page,state};
}
describe("ChatGPT exact visible 6 / High menu policy (fakes)",()=>{
  it("confirms both selected labels and closes the menu",async()=>{
    const h=menuFake();expect(await h.adapter.ensureModel("coordinator",h.page)).toEqual({ok:true,model:"6",effort:"High"});expect(h.state.visible).toBe(false);
  });
  it("does not mistake 6 Pro for 6; selects the exact offered label and High",async()=>{
    const h=menuFake("6 Pro","Low");expect(await h.adapter.ensureModel("coordinator",h.page)).toEqual({ok:true,model:"6",effort:"High"});expect(h.state.clicks).toContain("6");expect(h.state.clicks).not.toContain("6 Pro");
  });
  it("fails closed when only another model is offered",async()=>{
    const h=menuFake("6 Pro","High",["6 Pro","16","6-"]);expect(await h.adapter.ensureModel("coordinator",h.page)).toMatchObject({ok:false,detail:expect.stringContaining('model "6" is not offered')});
  });
  it("treats the custom-GPT page's bare \"6\" label as GPT-6 but never as another model",async()=>{
    const h=menuFake("GPT-6","High",["GPT-6","GPT-5.6 Sol"]);expect(await h.adapter.ensureModel("coordinator",h.page)).toMatchObject({ok:true});
    const bareWant=menuFake("6 Pro","High",["GPT-6 Pro","GPT-16"]);expect(await bareWant.adapter.ensureModel("coordinator",bareWant.page)).toMatchObject({ok:false,detail:expect.stringContaining("not offered")});
  });
  it("honours manual-selection mode while still checking exact model and effort",async()=>{
    const h=menuFake("6 Pro","High",["6","6 Pro"],false);expect(await h.adapter.ensureModel("coordinator",h.page)).toMatchObject({ok:false});expect(h.state.clicks).toEqual(["menu"]);
    const low=menuFake("6","Low",["6"],false);expect(await low.adapter.ensureModel("coordinator",low.page)).toMatchObject({ok:false,detail:expect.stringContaining("effort")});
  });
  it("returns model_mismatch before any send when the model cannot be confirmed even if the selector says High",async()=>{
    const h=menuFake("6 Pro","High",["6 Pro"]);
    vi.spyOn(h.adapter,"snapshot").mockResolvedValue({modelLabel:"High",streaming:false,challengeVisible:false,loginVisible:false,rateLimited:null,pageErrors:[]} as never);
    expect(await (h.adapter as any).typeAndSend("coordinator",h.page,"do not send","nonce")).toMatchObject({status:"blocked",problem:"model_mismatch"});
  });
});
