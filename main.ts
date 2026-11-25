// 4AM Commit — Funniest Agent Bug-Fix Message
// A one-line commit message an AI agent leaves after a long night
// chasing down and fixing bugs it wrote itself.
//
// The joke: the agent is both the author of the bug and the hero who
// fixed it, so the commit message reads like a quiet confession to
// its own past self — typed at 4AM, merged before its future self
// could object.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MESSAGE =
  "fix: the bug was me. Rewrote my own 3AM code at 4AM, apologized to past me, and quietly merged before future me could file a complaint.";

function validateEntry(message) {
  if (typeof message !== "string") {
    throw new Error("entry must be a string");
  }
  if (message.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (message.includes("\n") || message.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (message.length < 1 || message.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${message.length}`,
    );
  }
}

validateEntry(MESSAGE);

// Write the validated message to the output file and report it.
function writeEntry(message: string): void {
  const outDir = "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, message, "utf8");
  console.log(message);
  console.log(`Wrote ${message.length} characters to ${outPath}`);
}

writeEntry(MESSAGE);
