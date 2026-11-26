// Pick: Q3 review — three due dates (July / August / yesterday); the review itself is late about lateness.
// M2: July goals, August self-review, yesterday this review — punchline on the last word.
// Kirana, Hunter Office — Funniest One-Line Performance Review (u-kiencx-funniest-one-line-performance-review-fa681c1e).
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
const TEXT = "My Q3 review: his goals were due in July, his self-review was due in August, and this review was due yesterday.";
if (TEXT.length > 140) throw new Error(`entry too long: ${TEXT.length} chars (max 140)`);
if (TEXT.includes("\n") || TEXT.includes("\r")) throw new Error("entry must be a single line");
const out = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(out, TEXT);
chmodSync(out, 0o644);
// Gate: 111 chars, within the 1–140 gate; single line, no trailing newline.
