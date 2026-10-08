import { randomBytes, createHash } from "node:crypto";

const B62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function randomBase62(len: number): string {
  const bytes = randomBytes(len);
  let out = "";
  for (let i = 0; i < len; i++) out += B62[bytes[i] % 62];
  return out;
}

let lastTs = 0;
let counter = 0;

/**
 * OpenCode message IDs are "msg_" + 12 hex chars (48 bits of timestamp*0x1000+counter,
 * ascending) + 14 base62 chars. Observed on the installed 1.18.33 server
 * (e.g. prt_0f2fb10d5001HG7eXBmf14hUpl). We generate IDs in the same ascending
 * format so a caller-supplied messageID sorts correctly with server-generated ones.
 */
export function opencodeMessageId(now: number = Date.now()): string {
  if (now !== lastTs) {
    lastTs = now;
    counter = 0;
  }
  counter++;
  const v = BigInt(now) * 0x1000n + BigInt(counter);
  const hex = (v & 0xffffffffffffn).toString(16).padStart(12, "0");
  return `msg_${hex}${randomBase62(14)}`;
}

export function newRunId(now: Date = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  const stamp = `${now.getFullYear()}${p(now.getMonth() + 1)}${p(now.getDate())}-${p(now.getHours())}${p(now.getMinutes())}${p(now.getSeconds())}`;
  return `R-${stamp}-${randomBase62(4)}`;
}

/** Nonce embedded in every outbound chat message so the submission can be found again. */
export function newNonce(): string {
  return `H-${randomBase62(12)}`;
}

export function sha256(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex");
}
