// Scripted fake CLI; no model, browser, network or real auth operations.
import { mkdirSync, readFileSync, appendFileSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
const args=process.argv.slice(2),value=name=>args.includes(name)?args[args.indexOf(name)+1]:undefined;
if(args.includes('--version')){console.log('2.1.294 (fake Claude Code)');process.exit(0);}
if(args.includes('auth')){console.log(JSON.stringify({loggedIn:true,authMethod:'claude.ai',subscriptionType:'pro'}));process.exit(0);}
const spec=JSON.parse(readFileSync(value('--fixture'),'utf8'));
const sid=value('--session-id')??value('--resume'),cwd=process.cwd();
let input='';for await(const chunk of process.stdin)input+=chunk;
const capture={argv:args,input,apiKeyPresent:Object.keys(process.env).some(k=>/^ANTHROPIC_API_KEY$/i.test(k)),authTokenPresent:Object.keys(process.env).some(k=>/^ANTHROPIC_AUTH_TOKEN$/i.test(k))};
if(spec.capture){mkdirSync(dirname(spec.capture),{recursive:true});writeFileSync(spec.capture,JSON.stringify(capture));}
const file=join(process.env.CLAUDE_CONFIG_DIR,'projects',resolve(cwd).replace(/^([A-Z]):/,(_,d)=>d.toLowerCase()+':').replace(/[^a-z\d]/gi,'-'),sid+'.jsonl');
if(!spec.missingTranscript){mkdirSync(dirname(file),{recursive:true});appendFileSync(file,JSON.stringify({type:'user',sessionId:sid,cwd,uuid:'fake-user',message:{role:'user',content:[{type:'text',text:input}]}})+'\n');}
const emit=e=>process.stdout.write(JSON.stringify({session_id:sid,...e})+'\n');
emit({type:'system',subtype:'init',model:spec.model??`claude-${value('--model')}-5-5`});
if(spec.write){for(const [name,body]of Object.entries(spec.write)){const p=join(cwd,name);mkdirSync(dirname(p),{recursive:true});writeFileSync(p,body);}}
if(spec.mode==='malformed'){process.stdout.write('{broken json}\n');process.exit(0);}
if(spec.mode==='usage'){emit({type:'assistant',message:{id:'partial',content:[{type:'text',text:'Partial observations preserved.'}]}});emit({type:'result',subtype:'error_during_execution',is_error:true,errors:["You've hit your limit; resets in 5 hours"],result:'usage_limit'});process.exit(0);}
if(spec.mode==='crash'){emit({type:'assistant',message:{id:'partial',content:[{type:'text',text:'Partial before crash'}]}});process.exit(1);}
if(spec.mode==='hang'){emit({type:'assistant',message:{id:'partial',content:[{type:'text',text:'Waiting without tool execution'}]}});setInterval(()=>{},1000);}
else {
  let denied=false;
  for(let i=0;i<(spec.calls??0);i++){
    const name=spec.tool??'mcp__playwright__browser_snapshot',toolInput=spec.toolInput??{};
    emit({type:'assistant',message:{id:`assistant-${i}`,content:[{type:'tool_use',id:`tool-${i}`,name,input:toolInput}]}});
    let content=spec.toolError??'unchanged snapshot',is_error=!!spec.toolError;
    if(spec.invokeHook){const settings=JSON.parse(readFileSync(value('--settings'),'utf8')),hook=settings.hooks.PreToolUse[0].hooks[0];
      const result=spawnSync(hook.command,hook.args,{input:JSON.stringify({session_id:sid,tool_name:name,tool_input:toolInput}),encoding:'utf8',windowsHide:true});
      if(result.stdout.trim()){const reply=JSON.parse(result.stdout);if(reply.hookSpecificOutput?.permissionDecision==='deny'){content='permission denied: '+reply.hookSpecificOutput.permissionDecisionReason;is_error=true;denied=true;}}
    }
    emit({type:'user',message:{content:[{type:'tool_result',tool_use_id:`tool-${i}`,content,is_error}]}});
    if(spec.delayMs)await new Promise(r=>setTimeout(r,spec.delayMs));
  }
  emit({type:'assistant',message:{id:'final',content:[{type:'text',text:'HARNESS REPORT: fake task complete; browser state untouched.'}]}});
  const result={type:'result',subtype:'success',is_error:false,result:'HARNESS REPORT: fake task complete.',usage:{input_tokens:3,output_tokens:2},total_cost_usd:0,...(denied?{permission_denials:[{tool_name:spec.tool}]}:{})};
  if(spec.split){const raw=JSON.stringify({session_id:sid,...result})+'\n';process.stdout.write(raw.slice(0,13));await new Promise(r=>setTimeout(r,20));process.stdout.write(raw.slice(13));}
  else emit(result);
  if(spec.holdAfterResult)setInterval(()=>{},1000);
}
