export interface ChromeWindow {
  targetId:string; windowId:number; windowState:"normal"|"minimized"|"maximized"|"fullscreen";
  bounds:{left?:number;top?:number;width?:number;height?:number;windowState:string}; checkedAt:string;
}

/** Browser-level reads only. Never attach to a page, evaluate, focus, restore or close it. */
export async function readChromeWindow(port:number,timeoutMs=5000):Promise<ChromeWindow> {
  if(typeof WebSocket==="undefined")throw Error("Chrome window preflight requires Node.js 22 or newer");
  const response=await fetch(`http://127.0.0.1:${port}/json/version`,{signal:AbortSignal.timeout(timeoutMs),redirect:"error"});
  if(!response.ok)throw Error("Chrome window preflight: browser CDP endpoint unavailable");
  const version=await response.json() as {webSocketDebuggerUrl?:string};
  const url=new URL(version.webSocketDebuggerUrl??"");
  if(url.protocol!=="ws:"||url.hostname!=="127.0.0.1"||url.port!==String(port)||url.username||url.password||!url.pathname.startsWith("/devtools/browser/"))
    throw Error("Chrome window preflight: expected the owned loopback browser-level CDP endpoint");
  return new Promise((resolve,reject)=>{
    const socket=new WebSocket(url);let targetId="",settled=false;
    const finish=(error?:Error,value?:ChromeWindow)=>{
      if(settled)return;settled=true;clearTimeout(timer);socket.close();
      if(error)reject(error);else resolve(value!);
    };
    const timer=setTimeout(()=>finish(Error("Chrome window preflight: browser CDP read timed out")),timeoutMs);
    socket.addEventListener("error",()=>finish(Error("Chrome window preflight: browser CDP connection failed")));
    socket.addEventListener("close",()=>{if(!settled)finish(Error("Chrome window preflight: browser CDP disconnected before the window read completed"));});
    socket.addEventListener("open",()=>socket.send(JSON.stringify({id:1,method:"Target.getTargets",params:{}})));
    socket.addEventListener("message",event=>{
      try {
        const reply=JSON.parse(String(event.data));
        if(reply.error)throw Error(`Chrome window preflight: ${reply.error.message??"CDP error"}`);
        if(reply.id===1) {
          if(!Array.isArray(reply.result?.targetInfos))throw Error("Chrome window preflight: invalid target list");
          const pages=reply.result.targetInfos.filter((t:{type?:string})=>t.type==="page");
          if(pages.length!==1||typeof pages[0].targetId!=="string"||!pages[0].targetId)
            throw Error(`Chrome window preflight requires exactly one page target; found ${pages.length}`);
          targetId=pages[0].targetId;
          socket.send(JSON.stringify({id:2,method:"Browser.getWindowForTarget",params:{targetId}}));
        } else if(reply.id===2) {
          const {windowId,bounds}=reply.result??{};
          if(!targetId||typeof windowId!=="number"||!bounds||!["normal","minimized","maximized","fullscreen"].includes(bounds.windowState)||
            ["left","top","width","height"].some(key=>bounds[key]!==undefined&&(typeof bounds[key]!=="number"||!Number.isFinite(bounds[key]))))
            throw Error("Chrome window preflight: invalid window state or bounds");
          const safeBounds:ChromeWindow["bounds"]={windowState:bounds.windowState};
          for(const key of ["left","top","width","height"] as const)if(bounds[key]!==undefined)safeBounds[key]=bounds[key];
          finish(undefined,{targetId,windowId,windowState:bounds.windowState,bounds:safeBounds,checkedAt:new Date().toISOString()});
        }
      }catch(error){finish(error instanceof Error?error:Error("Chrome window preflight: invalid CDP response"));}
    });
  });
}
