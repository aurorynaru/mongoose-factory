// Local protocol fixture only: no Chrome, page, MCP process or browser tools.
import { createHash } from "node:crypto";
import { createServer } from "node:http";
import type { Socket } from "node:net";

export async function fakeCdp(options:{pages?:number;error?:boolean;invalid?:boolean;hang?:boolean;external?:boolean;ignoreMaximize?:boolean;setError?:boolean;delayMaximize?:boolean}={}) {
  const commands:{method:string;params:Record<string,unknown>}[]=[],http:string[]=[],sockets=new Set<Socket>();
  const state={windowState:"normal",left:0,top:0,width:1920,height:1080};
  const frame=(body:string,opcode=1)=>{
    const data=Buffer.from(body),header=Buffer.alloc(data.length<126?2:4);header[0]=0x80|opcode;
    if(data.length<126)header[1]=data.length;else {header[1]=126;header.writeUInt16BE(data.length,2);}
    return Buffer.concat([header,data]);
  };
  const server=createServer(async(req,res)=>{
    http.push(`${req.method} ${req.url}`);
    // Minimal stateless fake MCP for testing health output, with no tools.
    if(req.url==="/mcp") {
      if(req.method==="DELETE"){res.writeHead(200).end();return;}
      if(req.method!=="POST"){res.writeHead(405).end();return;}
      let text="";for await(const chunk of req)text+=chunk;
      const msg=JSON.parse(text);
      if(!("id" in msg)){res.writeHead(202).end();return;}
      const result=msg.method==="initialize"?{protocolVersion:msg.params.protocolVersion,capabilities:{tools:{}},serverInfo:{name:"fake-no-browser",version:"1"}}:{tools:[]};
      res.writeHead(200,{"content-type":"application/json"});res.end(JSON.stringify({jsonrpc:"2.0",id:msg.id,result}));return;
    }
    res.setHeader("content-type","application/json");
    res.end(JSON.stringify({webSocketDebuggerUrl:options.external?"ws://example.invalid:80/devtools/browser/fake":`ws://127.0.0.1:${port}/devtools/browser/fake`}));
  });
  server.on("connection",socket=>{sockets.add(socket);socket.on("close",()=>sockets.delete(socket));});
  server.on("upgrade",(req,socket)=>{
    const accept=createHash("sha1").update(String(req.headers["sec-websocket-key"])+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
    socket.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${accept}\r\n\r\n`);
    let buffer=Buffer.alloc(0);
    socket.on("data",chunk=>{
      buffer=Buffer.concat([buffer,chunk]);
      while(buffer.length>=2) {
        let size=buffer[1]&127,offset=2;if(size===126){if(buffer.length<4)return;size=buffer.readUInt16BE(2);offset=4;}
        const masked=!!(buffer[1]&128),length=offset+(masked?4:0)+size;if(buffer.length<length)return;
        const opcode=buffer[0]&15,mask=buffer.subarray(offset,offset+4),body=Buffer.from(buffer.subarray(offset+(masked?4:0),length));buffer=buffer.subarray(length);
        if(masked)for(let i=0;i<body.length;i++)body[i]^=mask[i%4];
        if(opcode===8){socket.end(frame("",8));return;}
        const msg=JSON.parse(body.toString());commands.push({method:msg.method,params:msg.params});
        if(options.hang)continue;
        if(msg.method==="Browser.setWindowBounds"&&!options.ignoreMaximize&&!options.setError) {
          const change=()=>{Object.assign(state,msg.params.bounds);if(state.windowState==="maximized")Object.assign(state,{left:0,top:0,width:2560,height:1440});};
          if(options.delayMaximize)setTimeout(change,100);else change();
        }
        const result=msg.method==="Target.getTargets"?{targetInfos:[...Array.from({length:options.pages??1},(_,i)=>({type:"page",targetId:`page-${i+1}`})),{type:"iframe",targetId:"frame-1"}]}:
          {windowId:7,bounds:{...state,...(options.invalid?{windowState:"unknown"}:{})}};
        socket.write(frame(JSON.stringify(options.error&&msg.method==="Browser.getWindowForTarget"||options.setError&&msg.method==="Browser.setWindowBounds"?{id:msg.id,error:{message:"window command failed"}}:{id:msg.id,result})));
      }
    });
  });
  await new Promise<void>(r=>server.listen(0,"127.0.0.1",r));const port=(server.address() as {port:number}).port;
  return {port,state,commands,http,close:async()=>{for(const socket of sockets)socket.destroy();await new Promise<void>(r=>server.close(()=>r()));}};
}
