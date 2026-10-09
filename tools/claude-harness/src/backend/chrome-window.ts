export interface ChromeWindow {
  targetId:string; windowId:number; windowState:"normal"|"minimized"|"maximized"|"fullscreen";
  bounds:{left?:number;top?:number;width?:number;height?:number;windowState:string}; checkedAt:string;
}

/** Browser-level reads only. Never attach to a page, evaluate, focus, restore or close it. */
export async function readChromeWindow(port:number,timeoutMs=5000):Promise<ChromeWindow> {
  return chromeWindow(port,timeoutMs,false);
}
/** Used after an owned Chrome start or an authorized minimized-window task restore; never from health. */
export async function maximizeChromeWindow(port:number,timeoutMs=5000):Promise<ChromeWindow> {
  return chromeWindow(port,timeoutMs,true);
}
async function chromeWindow(port:number,timeoutMs:number,maximize:boolean):Promise<ChromeWindow> {
  if(typeof WebSocket==="undefined")throw Error("Chrome window preflight requires Node.js 22 or newer");
  const response=await fetch(`http://127.0.0.1:${port}/json/version`,{signal:AbortSignal.timeout(timeoutMs),redirect:"error"});
  if(!response.ok)throw Error("Chrome window preflight: browser CDP endpoint unavailable");
  const version=await response.json() as {webSocketDebuggerUrl?:string};
  const url=new URL(version.webSocketDebuggerUrl??"");
  if(url.protocol!=="ws:"||url.hostname!=="127.0.0.1"||url.port!==String(port)||url.username||url.password||!url.pathname.startsWith("/devtools/browser/"))
    throw Error("Chrome window preflight: expected the owned loopback browser-level CDP endpoint");
  return new Promise((resolve,reject)=>{
    const socket=new WebSocket(url);let targetId="",settled=false,windowId:number|undefined,verifying=false;
    const finish=(error?:Error,value?:ChromeWindow)=>{
      if(settled)return;settled=true;clearTimeout(timer);socket.close();
      if(error)reject(error);else resolve(value!);
    };
    const timer=setTimeout(()=>finish(Error("Chrome window preflight: browser CDP read timed out")),timeoutMs);
    socket.addEventListener("error",()=>finish(Error("Chrome window preflight: browser CDP connection failed")));
    socket.addEventListener("close",()=>{if(!settled)finish(Error("Chrome window preflight: browser CDP disconnected before the window read completed"));});
    socket.addEventListener("open",()=>socket.send(JSON.stringify({id:1,method:"Target.getTargets",params:{}})));
    // Several tabs (e.g. the Web Client plus a Web Designer tab) are fine as long as they share ONE window.
    let pageIds:string[]=[];const windows=new Map<string,{windowId:number;bounds:unknown}>();
    const handle=(reply:any):void=>{
        if(reply.error)throw Error(`Chrome window preflight: ${reply.error.message??"CDP error"}`);
        if(reply.id===1) {
          if(!Array.isArray(reply.result?.targetInfos))throw Error("Chrome window preflight: invalid target list");
          const pages=reply.result.targetInfos.filter((t:{type?:string})=>t.type==="page");
          if(!pages.length||pages.some((p:{targetId?:unknown})=>typeof p.targetId!=="string"||!p.targetId))
            throw Error(`Chrome window preflight requires at least one valid page target; found ${pages.length}`);
          pageIds=pages.map((p:{targetId:string})=>p.targetId);
          pageIds.forEach((id,i)=>socket.send(JSON.stringify({id:100+i,method:"Browser.getWindowForTarget",params:{targetId:id}})));
        } else if(reply.id>=100&&reply.id<100+pageIds.length) {
          if(typeof reply.result?.windowId!=="number")throw Error("Chrome window preflight: invalid window for a page target");
          windows.set(pageIds[reply.id-100],{windowId:reply.result.windowId,bounds:reply.result.bounds});
          if(windows.size<pageIds.length)return;
          const ids=new Set([...windows.values()].map(w=>w.windowId));
          if(ids.size!==1)throw Error(`Chrome window preflight: the owned Chrome has ${ids.size} windows; expected one window (tabs are fine)`);
          targetId=pageIds[0];
          handle({id:2,result:windows.get(targetId)});
        } else if(maximize&&reply.id===3) {
          verifying=true;socket.send(JSON.stringify({id:4,method:"Browser.getWindowBounds",params:{windowId}}));
        } else if(maximize&&reply.id===5) {
          socket.send(JSON.stringify({id:3,method:"Browser.setWindowBounds",params:{windowId,bounds:{windowState:"maximized"}}}));
        } else if(reply.id===2||maximize&&reply.id===4) {
          const bounds=reply.result?.bounds;
          if(reply.id===2)windowId=reply.result?.windowId;
          if(!targetId||typeof windowId!=="number"||!bounds||!["normal","minimized","maximized","fullscreen"].includes(bounds.windowState)||
            ["left","top","width","height"].some(key=>bounds[key]!==undefined&&(typeof bounds[key]!=="number"||!Number.isFinite(bounds[key]))))
            throw Error("Chrome window preflight: invalid window state or bounds");
          if(maximize&&!verifying) {
            // CDP requires leaving fullscreen/minimized before setting maximized.
            const restore=["fullscreen","minimized"].includes(bounds.windowState);
            socket.send(JSON.stringify({id:restore?5:3,method:"Browser.setWindowBounds",params:{windowId,bounds:{windowState:restore?"normal":"maximized"}}}));return;
          }
          if(maximize&&bounds.windowState!=="maximized") {
            // Windows placement can settle after the command acknowledgement.
            setTimeout(()=>{if(!settled)socket.send(JSON.stringify({id:4,method:"Browser.getWindowBounds",params:{windowId}}));},50);return;
          }
          const safeBounds:ChromeWindow["bounds"]={windowState:bounds.windowState};
          for(const key of ["left","top","width","height"] as const)if(bounds[key]!==undefined)safeBounds[key]=bounds[key];
          finish(undefined,{targetId,windowId,windowState:bounds.windowState,bounds:safeBounds,checkedAt:new Date().toISOString()});
        }
    };
    socket.addEventListener("message",event=>{
      try { handle(JSON.parse(String(event.data))); }
      catch(error){finish(error instanceof Error?error:Error("Chrome window preflight: invalid CDP response"));}
    });
  });
}
