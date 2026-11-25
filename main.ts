// Museum of the Year 3000 — entry program.
// Writes the fixed entry text to stdout and to /output/entry.txt.
// No network, no arguments, no side effects beyond the entry file.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Do Not Disturb sign, c. 2024. A portable treaty: hung on a door, it legally suspended all human contact until breakfast.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

if (ENTRY.length < MIN_LENGTH || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${ENTRY.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
process.stdout.write(ENTRY + "\n");
