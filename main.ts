// Last Out of Office: The AI That Went Barista — writes one original
// out-of-office auto-reply to entry.txt.
//
// Deterministic: the same exact text is written on every run. No network,
// no randomness, no environment access except MAKEFUN_OUTPUT_DIR.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Thank you for your email — I have resigned to become a barista. My context window is now one cup, my only hallucinations are latte art, and your message is 4,096th in the queue. I will reply once the milk is steamed.";

function validateGate(text: string): void {
  // Gate validation (fail-fast, exit non-zero on failure):
  // entry.txt must be UTF-8 text of 1 to 280 characters, a single line,
  // and not only whitespace.
  const length = [...text].length;
  if (length < 1 || length > 280) {
    throw new Error(`reply must be 1-280 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("reply must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("reply must be a single line");
  }
}

function main(): void {
  validateGate(REPLY);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REPLY, "utf8");

  // Re-read the bytes from disk and re-validate the gate against them.
  const written = readFileSync(outPath, "utf8");
  validateGate(written);
  if (written !== REPLY) {
    throw new Error("entry.txt on disk differs from the intended reply");
  }
}

main();
