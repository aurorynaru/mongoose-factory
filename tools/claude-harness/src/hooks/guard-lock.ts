import { randomUUID } from "node:crypto";
import { closeSync, existsSync, openSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";

export const LOCK_WAIT_MS=3000, LOCK_RETRY_MS=20, STALE_LOCK_MS=60_000;
interface Owner {pid:number;timestamp:number;token:string}
interface Snapshot {raw:string;owner:Owner|null;mtime:number}
export interface LockRecovery {reason:"owner_gone"|"expired";lock:"state"|"reclaim";ownerPid:number|null}
export class LockTimeout extends Error {}
const sleep=(ms:number)=>Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,ms);
function snapshot(file:string):Snapshot|null {
  try {
    const raw=readFileSync(file,"utf8"),mtime=statSync(file).mtimeMs;
    let owner:Owner|null=null;
    try{const value=JSON.parse(raw);if(Number.isSafeInteger(value.pid)&&value.pid>0&&Number.isFinite(value.timestamp)&&value.timestamp>0&&typeof value.token==="string")owner=value;}catch{/* A creator may still be writing its metadata. */}
    return {raw,owner,mtime};
  }catch{return null;}
}
function stale(s:Snapshot):LockRecovery["reason"]|null {
  if(s.owner)try{process.kill(s.owner.pid,0);}catch(error){if((error as NodeJS.ErrnoException).code==="ESRCH")return "owner_gone";}
  // Also recover legacy empty locks, but only after the safe age limit.
  return Date.now()-(s.owner?.timestamp??s.mtime)>STALE_LOCK_MS?"expired":null;
}
function same(file:string,s:Snapshot) {
  const now=snapshot(file);return now?.raw===s.raw&&now.mtime===s.mtime;
}
function create(file:string) {
  const owner:Owner={pid:process.pid,timestamp:Date.now(),token:randomUUID()},fd=openSync(file,"wx");
  try{writeFileSync(fd,JSON.stringify(owner));}catch(error){closeSync(fd);unlinkSync(file);throw error;}
  return {owner,fd};
}
function release(file:string,held:ReturnType<typeof create>) {
  // Never delete a successor's lock after an expired lease has been reclaimed.
  try{if(snapshot(file)?.owner?.token===held.owner.token)unlinkSync(file);}finally{closeSync(held.fd);}
}
function reclaim(file:string,gate:string,onRecovery:(event:LockRecovery)=>void) {
  const observed=snapshot(file);if(!observed||!stale(observed))return;
  let held:ReturnType<typeof create>|undefined;
  try {
    held=create(gate); // Serialize stale reapers; regular acquisition also respects this gate.
    const current=snapshot(file),reason=current&&stale(current);
    if(current&&reason&&same(file,current)&&snapshot(gate)?.owner?.token===held.owner.token) {
      unlinkSync(file);onRecovery({reason,lock:"state",ownerPid:current.owner?.pid??null});
    }
  }catch(error){if((error as NodeJS.ErrnoException).code!=="EEXIST")throw error;}
  finally{if(held)release(gate,held);}
}

export function acquireGuardLock(stateFile:string,onRecovery:(event:LockRecovery)=>void) {
  const file=stateFile+".lock",gate=file+".reclaim",deadline=performance.now()+LOCK_WAIT_MS;
  let lastCode="EEXIST";
  while(performance.now()<deadline) {
    let held:ReturnType<typeof create>|undefined;
    try {
      if(existsSync(gate)) {
        const current=snapshot(gate),reason=current&&stale(current);
        if(current&&reason&&same(gate,current)){unlinkSync(gate);onRecovery({reason,lock:"reclaim",ownerPid:current.owner?.pid??null});}
      } else {
        try {
          held=create(file);
          if(!existsSync(gate)) {
            const acquired=held;held=undefined;
            return {token:acquired.owner.token,
              owns:()=>snapshot(file)?.owner?.token===acquired.owner.token,
              release:()=>release(file,acquired)};
          }
        }catch(error) {
          if((error as NodeJS.ErrnoException).code!=="EEXIST")throw error;
          reclaim(file,gate,onRecovery);
        }
      }
    }catch(error){lastCode=(error as NodeJS.ErrnoException).code??"lock_io";}
    finally{if(held)release(file,held);}
    sleep(Math.max(0,Math.min(LOCK_RETRY_MS,deadline-performance.now())));
  }
  throw new LockTimeout(`Guard lock timeout: could not acquire the state lock within ${LOCK_WAIT_MS}ms (${lastCode}); preserve state and stop instead of bypassing the hook.`);
}
