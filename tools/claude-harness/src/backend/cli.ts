import type { Command } from "commander";
import { loadConfig, resolvePaths } from "../config.js";
import { McpService, type ServiceAction, type ServiceKind } from "./mcp-service.js";

export function registerServiceCommands(program: Command) {
  for (const kind of ["chrome", "mcp"] as const) {
    const group = program.command(kind).description(`Owned ${kind} lifecycle (loopback CDP; no gateway)`);
    for (const action of ["start", "health", "stop", ...(kind === "mcp" ? ["restart"] : [])]) {
      group.command(action).action(async () => {
        const { config } = loadConfig(program.opts().config);
        const service = new McpService(config, resolvePaths(config));
        if (kind === "mcp" && action === "start" && !(await service.command("chrome", "health")).ok)
          throw new Error("Owned Chrome must already be healthy; no automatic browser launch");
        const result = kind === "mcp" && action === "health" ? await service.health()
          : await service.command(kind as ServiceKind, action as ServiceAction);
        if (result.ok && kind === "mcp" && action === "start") service.generateWorkerConfig();
        console.log(JSON.stringify(result, null, 2));
        if (!result.ok) process.exitCode = 1;
      });
    }
  }
}
