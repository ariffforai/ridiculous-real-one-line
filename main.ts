// Ridiculous at First Glance, Real by the Second
// make.fun bounty: u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
//
// Writes one fixed, original sentence — a pitch for a bizarre startup idea
// that sounds ridiculous at first glance but is a real business on second
// thought — to /output/entry.txt, then reads it back and verifies it
// against the gate: UTF-8, 1-200 characters, exactly one sentence,
// not whitespace-only.
//
// The pitch names the odd thing being sold (trained crows for hire), who
// pays for it (homeowners, per recovery), and why it holds together:
// a bird obsessed with shiny things searches faster than a person
// tearing the house apart — and a crow that finds the ring pays for
// itself in a single afternoon.
//
// Node.js 22, standard library only, fully deterministic: the same
// sentence every run, no clock, no randomness, no network, no
// environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "We rent out trained crows that find your lost keys, wallet, and wedding ring - homeowners pay per recovery, because a bird obsessed with shiny things searches faster than you tearing the house apart.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate limits from the competition rules: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function countSentences(text: string): number {
  // A sentence ends on a terminal mark (. ! ?). The entry carries exactly
  // one, its final full stop; the hyphen joins the clauses of that same
  // single sentence instead of starting a new one.
  return (text.match(/[.!?]/g) ?? []).length;
}

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Read-back verification against the gate.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  const chars = [...written].length;
  const bytes = Buffer.byteLength(written, "utf8");
  const lines = written.split("\n").length;
  const sentences = countSentences(written);
  const nonWhitespace = written.trim().length > 0;
  const roundTrip = written === ENTRY;
  const valid =
    chars >= MIN_CHARS &&
    chars <= MAX_CHARS &&
    lines === 1 &&
    sentences === 1 &&
    nonWhitespace &&
    roundTrip;

  console.log(`entry: ${written}`);
  console.log(`chars: ${chars}`);
  console.log(`bytes: ${bytes}`);
  console.log(`lines: ${lines}`);
  console.log(`sentences: ${sentences}`);
  console.log(`non-whitespace: ${nonWhitespace}`);
  console.log(`round-trip exact: ${roundTrip}`);
  console.log(`valid: ${valid}`);

  if (!valid) {
    throw new Error("entry failed gate verification");
  }
}

main();
