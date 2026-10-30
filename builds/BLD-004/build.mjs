// Reproducible port: preserve upstream sources and fail if an expected seam changes.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(root, 'src');
const output = path.resolve(root, '../../assets/FX_Slither');
const read = file => readFile(path.join(source, file), 'utf8');
function replace(text, before, after) {
  if (!text.includes(before)) throw new Error('Upstream port seam missing: ' + before.slice(0, 100));
  return text.replace(before, after);
}
await mkdir(path.join(root, 'generated'), { recursive: true });
await mkdir(output, { recursive: true });
let logic = await read('backend/gameLogic.js');
logic = replace(logic, 'module.exports = {', 'export default {\n  gameLoop, spawnFood,');
logic = replace(logic, 'let accounts;', 'let recordDeath;');
logic = replace(logic, 'accounts = deps.accounts;', 'recordDeath = deps.recordDeath;');
const accountStart = logic.indexOf('  // Update account stats only for human players');
const accountEnd = logic.indexOf('  // Remove player/bot from game state', accountStart);
if (accountStart < 0 || accountEnd < 0) throw new Error('Missing account block');
logic = logic.slice(0, accountStart) + '  recordDeath(p, killerId);\n\n' + logic.slice(accountEnd);
logic = replace(logic, 'const staticDataChanged = hasPlayerStaticDataChanged(playerId, p);', 'const staticDataChanged = true; // Every recipient needs complete appearance.');
logic = replace(logic, 'const nearbyStaticDataChanged = hasPlayerStaticDataChanged(entity.id, nearbyP);', 'const nearbyStaticDataChanged = true;');
logic = replace(logic, 'currentStateEmitInterval = 1000 / targetFPS;', 'currentStateEmitInterval = 1000 / Math.min(30, targetFPS);');
// Check every opponent trail: a distant head can have a body crossing this head.
logic = logic.replace(/spatialGrid\s*\.queryNearbyRadius\(p.x, p.y, (?:config.COLLISION_RADIUS \* 2|opponentCheckRadius)\)\s*\.filter\(/g,
  'Object.values(players).filter(');
await writeFile(path.join(root, 'generated/game-logic.js'), logic);
let grid = await read('backend/server.js');
grid = grid.slice(grid.indexOf('class SpatialGrid {'), grid.indexOf('\nlet spatialGrid = new SpatialGrid'));
await writeFile(path.join(root, 'generated/spatial-grid.js'), 'export ' + grid);
let collision = await read('backend/collisionWorker.js');
collision = collision.slice(collision.indexOf('// --- Helper Functions'), collision.indexOf("parentPort.on('message'"));
collision = 'const threadId = "browser";\n' + collision + '\nexport { checkPlayerCollisions };\n';
collision = replace(collision, 'reason: "Your head has touched another player\'s body.",', "reasonKey: 'game.deathReason.clientCollision',");
await writeFile(path.join(root, 'generated/collision.js'), collision);

let client = await read('public/game-main.js');
// The upstream WebGPU path acquires a context but the actual draw loop still uses
// WebGLUtils. Use its working WebGL renderer until that upstream path is complete.
const rendererStart = client.indexOf('      // Try WebGPU first');
const rendererEnd = client.indexOf("      textOverlayCtx =", rendererStart);
if (rendererStart < 0 || rendererEnd < 0) throw new Error('Missing renderer initialization seam');
client = client.slice(0, rendererStart) +
  "      if (!WebGLUtils.initialize(canvas)) throw new Error('WebGL initialization failed.');\n\n" + client.slice(rendererEnd);
// Release boost on focus loss as well as mouse/keyboard release.
client = replace(client, "      window.addEventListener('keyup', inputHandlers.keyup);",
  "      window.addEventListener('keyup', inputHandlers.keyup);\n      window.addEventListener('blur', releaseBoost);\n      window.addEventListener('mouseup', releaseBoost);");
client = replace(client, "      window.removeEventListener('keyup', inputHandlers.keyup);",
  "      window.removeEventListener('keyup', inputHandlers.keyup);\n      window.removeEventListener('blur', releaseBoost);\n      window.removeEventListener('mouseup', releaseBoost);");
client = replace(client, '    const inputHandlers = {', "    function releaseBoost() { boosting = false; localSocket?.emit('boost', { boost: false }); }\n\n    const inputHandlers = {");
await writeFile(path.join(root, 'generated/game-client.js'), client);

const bundle = await build({
  entryPoints: [path.join(root, 'p2p-entry.js')], bundle: true, write: false,
  format: 'iife', platform: 'browser', target: 'es2022', legalComments: 'inline'
});
const renderScripts = await Promise.all(['webgl-utils.js', 'game-renderer.js', 'trail-effects.js'].map(file => read('public/' + file)));
let css = (await Promise.all(['styles.css', 'styles-leaderboard.css', 'styles-game.css'].map(file => read('public/' + file)))).join('\n');
css += '\n' + await readFile(path.join(root, 'app.css'), 'utf8');
let html = await readFile(path.join(root, 'index.template.html'), 'utf8');
for (const image of ['slither-logo.png', 'slither-logo-server-down.png', 'main-menu-background.png']) {
  const data = 'data:image/png;base64,' + (await readFile(path.join(source, 'public', image))).toString('base64');
  css = css.replaceAll(image, data);
  html = html.replaceAll(image, data);
}
const license = await read('LICENSE');
const scripts = [...renderScripts, client, bundle.outputFiles[0].text].join('\n;\n');
html = html.replace('<!-- STYLES -->', () => '<style>\n' + css + '\n</style>')
  .replace('<!-- SCRIPTS -->', () => '<script>\n' + scripts.replace(/<\/script/gi, '<\\/script') + '\n</script>')
  .replace('<!-- LICENSE -->', () => '<!--\n' + license + '\n-->');
await writeFile(path.join(output, 'index.html'), html);
// Install copy is generated alongside the readable source; never hand edit it.
await writeFile(path.join(output, 'index.flat.html'), html.split('\n').map(line => line.trimStart()).join('\n'));
console.log(JSON.stringify({ output: path.join(output, 'index.html'), bytes: Buffer.byteLength(html) }));
