import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { HARNESS_DIR } from "../src/config.js";

describe("operator replay preparation",()=>{
  it("keeps R3/R4 identical except run IDs/models and pauses for review on exit 3 in every step",()=>{
    const scripts=["R3","R4"].map(id=>readFileSync(join(HARNESS_DIR,`replays/EXP-033-${id}.tasks.md`),"utf8").replaceAll("\r\n","\n"));
    expect(scripts[0].replaceAll("EXP-033-R3","EXP-033-REPLAY").replaceAll("haiku","MODEL")).toBe(scripts[1].replaceAll("EXP-033-R4","EXP-033-REPLAY").replaceAll("sonnet","MODEL"));
    for(const script of scripts) {
      expect(script.replace(/\s+/g," ")).toContain("Mongoose configuration selected (the OK button on the Infor configuration screen clicked) and the Web Client is loaded, showing the normal Web Client page, not a sign-in or configuration screen");
      expect(script.match(/if \(\$taskExit -eq 3\)/g)).toHaveLength(5);
      expect(script.match(/throw "completed_with_denials: review permissionDenials/g)).toHaveLength(5);
      expect(script).toContain("continue with the next task manually only after review");
    }
  });
});
