// Fake HTTP MCP endpoint for process-ownership tests; cannot open browsers.
import { createServer } from 'node:http';
const port = Number(process.argv[process.argv.indexOf('--port') + 1]);
const server = createServer(async (req, res) => {
  if (req.method === 'DELETE') { res.writeHead(200).end(); return; }
  if (req.method !== 'POST') { res.writeHead(405).end(); return; }
  let input = ''; for await (const part of req) input += part;
  const msg = JSON.parse(input);
  if (!('id' in msg)) { res.writeHead(202).end(); return; }
  const result = msg.method === 'initialize' ? { protocolVersion: msg.params.protocolVersion, capabilities: { tools: {} }, serverInfo: { name: 'fake-mcp-no-browser', version: '1' } }
    : msg.method === 'tools/list' ? { tools: [] } : {};
  res.writeHead(200, { 'content-type': 'application/json', 'mcp-session-id': 'fake-session' });
  res.end(JSON.stringify({ jsonrpc: '2.0', id: msg.id, result }));
});
server.listen(port, '127.0.0.1');
