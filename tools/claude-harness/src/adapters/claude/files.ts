import { createHash, randomUUID } from "node:crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
export const hash = (s: string | Buffer) => createHash("sha256").update(s).digest("hex");
export function save(file: string, value: unknown) {
  mkdirSync(dirname(file), { recursive: true });
  const tmp = `${file}.${randomUUID()}.tmp`; writeFileSync(tmp, JSON.stringify(value, null, 2)); renameSync(tmp, file);
}
export function read<T>(file: string): T { return JSON.parse(readFileSync(file, "utf8").replace(/^\uFEFF/, "")); }
