// The Funniest Toaster Error Message — make.fun entry.
// Writes one line (at most 120 characters) to /output/entry.txt:
// the error message a kitchen toaster shows its owner. The bread
// is stuck, the toaster has contacted the bread, and the bread has
// no comment.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Error: the bread is stuck. I have contacted the bread. The bread has no comment.";

// Gate guard: the entry must be 1–120 characters and not only whitespace.
if (entry.length < 1 || entry.length > 120 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
