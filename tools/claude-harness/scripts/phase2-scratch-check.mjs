// Explicit one-off operator-authorized check. Never part of npm test.
import assert from 'node:assert/strict';
import { createServer } from 'node:net';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { ConfigSchema, resolvePaths } from '../dist/config.js';
import { McpService } from '../dist/backend/mcp-service.js';
if (!process.argv.includes('--authorized-scratch-check')) throw Error('Requires explicit scratch-check authorization');
const root = resolve('claude-data/phase2-scratch');
mkdirSync(root, { recursive: true });
// Refuse blind replay: an interrupted invocation may already have launched Chrome.
writeFileSync(join(root, 'launch-attempted.json'), JSON.stringify({ at: new Date().toISOString() }), { flag: 'wx' });
async function freePort() { const s = createServer(); await new Promise(r => s.listen(0, '127.0.0.1', r)); const port = s.address().port; await new Promise(r => s.close(r)); return port; }
const cfg = ConfigSchema.parse({ dataDir: root, mongooseBrowserProfile: join(root, 'profile'),
  mcp: { port: await freePort(), cdpPort: await freePort(), secretsFile: null, outputDir: join(root, 'output') } });
const service = new McpService(cfg, resolvePaths(cfg));
const lines = [];
const record = (label, value) => { const line = JSON.stringify({ label, value }); lines.push(line); writeFileSync(join(root, 'exact-output.jsonl'), lines.join('\n')+'\n'); console.log(line); };
const tabs = async () => (await (await fetch(`http://127.0.0.1:${cfg.mcp.cdpPort}/json`)).json()).filter(t => t.type === 'page');
let client, transport;
try {
  const chrome = await service.command('chrome', 'start'); record('chrome_start', chrome); assert.equal(chrome.ok, true);
  const initial = await tabs(); record('cdp_before', initial); assert.equal(initial.length, 1); assert.equal(initial[0].url, 'about:blank');
  const mcp = await service.command('mcp', 'start'); record('mcp_start', mcp); assert.equal(mcp.ok, true);
  transport = new StreamableHTTPClientTransport(new URL(service.url));
  client = new Client({ name: 'claude-harness-scratch-persistence', version: '0.1.0' });
  await client.connect(transport);
  const tool = (await client.listTools()).tools.find(t => t.name === 'browser_tabs'); assert.ok(tool);
  const result = await client.callTool({ name: 'browser_tabs', arguments: { action: 'new' } }); record('mcp_new_blank_tab', result); assert.notEqual(result.isError, true);
  const beforeDisconnect = await tabs(); record('cdp_two_tabs_before_disconnect', beforeDisconnect);
  assert.equal(beforeDisconnect.length, 2); assert.ok(beforeDisconnect.every(t => t.url === 'about:blank'));
  await transport.terminateSession(); await client.close(); client = null; transport = null;
  record('last_client_disconnected', { sessionDeleted: true, clientClosed: true });
  await new Promise(r => setTimeout(r, 1500));
  const after = await tabs(); record('cdp_after_last_disconnect', after);
  assert.deepEqual(after.map(t => t.id).sort(), beforeDisconnect.map(t => t.id).sort());
  assert.ok(after.every(t => t.url === 'about:blank'));
  const health = await service.command('chrome', 'health'); record('chrome_after_last_disconnect', health); assert.equal(health.ok, true);
  record('persistence_result', { chromeAlive: true, originalTabAlive: true, secondTabAlive: true, pageCount: after.length });
} finally {
  if (transport) await transport.terminateSession().catch(() => {});
  if (client) await client.close().catch(() => {});
  // Stop independently; an MCP stop does not terminate externally owned Chrome.
  record('mcp_stop', await service.command('mcp', 'stop'));
  record('chrome_stop', await service.command('chrome', 'stop'));
}
// Scratch profile deletion is a separate PowerShell operation after owned stop verification.
