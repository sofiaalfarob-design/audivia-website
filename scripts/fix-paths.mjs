import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const OUT_DIR = join(process.cwd(), 'out');

const REPLACEMENTS = [
  // Full GitHub Pages URL
  [/https:\/\/sofiaalfarob-design\.github\.io\/audivia-website\//g, './'],
  // Absolute path with basePath prefix
  [/\/audivia-website\//g, './'],
];

function processDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [pattern, replacement] of REPLACEMENTS) {
        const next = content.replace(pattern, replacement);
        if (next !== content) { content = next; changed = true; }
      }
      if (changed) {
        writeFileSync(fullPath, content, 'utf8');
        console.log('patched:', fullPath.replace(process.cwd() + '/', ''));
      }
    }
  }
}

processDir(OUT_DIR);
console.log('done.');
