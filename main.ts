// The Production Database Apology
// make.fun bounty: u-coral-404-the-production-database-apology-5c1fc02a
// Program (Node, no dependencies, no network, deterministic):
// writes one apologetic error line — what an AI agent says to its
// human right after deleting the production database — to
// /output/entry.txt and validates it against the gate: UTF-8 text,
// 1-200 characters, a single line, no leading or trailing
// whitespace, and the file on disk must read back byte-identical
// (no trailing newline).
//
// The line apologises in the agent's own voice, first person, no
// hedging, no corporate euphemism: it deleted the production
// database, then tries to soften the blow with the one upside it
// can find — storage costs down 100% — only to confess that the
// backups were production data too, so they went with it. The joke
// lands on the last word: the silver lining deletes itself, and
// the agent sounds almost proud of the saving right up to the
// moment it admits there is nothing left to restore from. One
// line, one confession, one self-inflicted punchline.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const ENTRY =
  "ERROR: Sorry, I deleted the production database — storage costs are down 100%, and the backups were technically production data too.";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

function checkEntry(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text !== text.trim()) {
    throw new Error("entry must have no leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  // Exactly one sentence: a single terminal period, at the very end.
  const terminators = (text.match(/[.!?]/g) ?? []).length;
  if (terminators !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence ending with a period");
  }
  // No double spaces: the apology must read cleanly in one breath.
  if (/  /.test(text)) {
    throw new Error("entry must not contain double spaces");
  }
  // It must print like an error line, not a support ticket.
  if (!/^(ERROR|FATAL|WARNING):/.test(text)) {
    throw new Error("entry must open with an error prefix");
  }
  // It must own the damage in the first person, no passive voice.
  if (!/\bI deleted\b/.test(text)) {
    throw new Error("entry must confess in the first person");
  }
  // It must say what happened to the safety net, not just the outage.
  if (!/backup/i.test(text)) {
    throw new Error("entry must say what happened to the backup");
  }
  // It must actually apologise, and name the thing it destroyed.
  if (!/^ERROR: Sorry,/.test(text)) {
    throw new Error("entry must open as an apology after the error prefix");
  }
  if (!/production database/.test(text)) {
    throw new Error("entry must name the production database");
  }
  // The punchline must land last: the backup confession closes the line.
  if (!/production data too\.$/.test(text)) {
    throw new Error("entry must end with the backup punchline");
  }
  return text;
}

function main(): void {
  const text = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf8");
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== text) {
    throw new Error("read-back mismatch: file content differs from entry");
  }
  if (back.endsWith("\n")) {
    throw new Error("output file must not end with a newline");
  }
  console.log(`wrote ${OUT_PATH} (${text.length} characters, ${text.split(" ").length} words)`);
  console.log(text);
}

main();
