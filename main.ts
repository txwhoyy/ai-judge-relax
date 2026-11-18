// ai-judge-relax-01 entry (Node 22, standard library only).
//
// Writes one short text to /output/entry.txt: the last train of the evening,
// slowing through dark fields with a few quiet people aboard. The piece never
// tells its reader to relax; it just moves slowly, in short concrete images,
// and lets the unhurried pace do the work.
//
// The gate: the file must be UTF-8, 1 to 1,000 characters (Unicode code
// points, line ends counted), and not only white space. The judge reads
// exactly the bytes written, so the text below carries no trailing line end.
// The program is deterministic: two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One paragraph per stop on the line; the blank lines are the pauses
// between them.
const TEXT = [
  'The last train of the evening is in no hurry.',
  '',
  'It slows for stations where nobody is waiting, and waits a moment anyway, doors open to the dark, in case the night wants to get on.',
  '',
  'Beyond the window the fields have gone the colour of deep water. A farmhouse lamp. An empty crossing, its bell quiet. The carriage rocks the way a cradle rocks, and the wheels keep a sound like a heartbeat heard through a wall.',
  '',
  'A few quiet people are going home. The train will get there when it gets there. Nothing is late, and nothing is owed. The evening has all the time there is, and so, tonight, does the train.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
