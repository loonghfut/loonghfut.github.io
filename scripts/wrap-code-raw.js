#!/usr/bin/env node
// Scan markdown files and wrap code fences that contain Liquid tags with {% raw %}...{% endraw %}
// Safe: creates .bak backups for modified files.

const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      // skip Jekyll config folders where Liquid is expected
      if (['_layouts', '_includes', '_sass', 'assets'].includes(ent.name)) continue;
      walk(full, cb);
    } else {
      cb(full);
    }
  }
}

const root = process.cwd();
const exts = new Set(['.md', '.markdown']);
let changedFiles = 0;

walk(root, (file) => {
  if (!exts.has(path.extname(file).toLowerCase())) return;
  // skip files in .git and node_modules
  if (file.includes(path.sep + '.git' + path.sep) || file.includes(path.sep + 'node_modules' + path.sep)) return;

  let text = fs.readFileSync(file, 'utf8');
  const orig = text;

  // We'll scan for fenced code blocks ```` or ``` that contain Liquid tokens
  // Approach: find all fences and check their content
  const fenceRe = /(^|\n)(```+)([^\n]*\n)([\s\S]*?)(\n\2)(?=\n|$)/g;
  let out = '';
  let lastIndex = 0;
  let m;
  let modified = false;

  while ((m = fenceRe.exec(text)) !== null) {
    const start = m.index + (m[1] ? m[1].length : 0);
    const fence = m[2];
    const info = m[3];
    const content = m[4];
    const endFence = m[5];

    // Append text before this fence
    out += text.slice(lastIndex, start);

    // Check if already wrapped with raw before start and end after endFence
    // Check preceding substring up to 20 chars for '{% raw %}' and following substring for '{% endraw %}'
    const before = text.slice(Math.max(0, start - 20), start);
    const after = text.slice(fenceRe.lastIndex, Math.min(text.length, fenceRe.lastIndex + 20));
    const alreadyWrapped = /\{%\s*raw\s*%\}$/.test(before) && /^\{%\s*endraw\s*%\}/.test(after);

    if (!alreadyWrapped && /\{\{|\{%/.test(content)) {
      // Insert raw wrapper outside the fence
      out += '{% raw %}\n' + fence + info + content + endFence + '\n{% endraw %}';
      modified = true;
    } else {
      // copy original fence as-is
      out += fence + info + content + endFence;
    }

    lastIndex = fenceRe.lastIndex;
  }

  if (lastIndex === 0) {
    // no fences, skip
    return;
  }

  // append trailing text
  out += text.slice(lastIndex);

  if (modified) {
    // backup
    fs.writeFileSync(file + '.bak', orig, 'utf8');
    fs.writeFileSync(file, out, 'utf8');
    changedFiles++;
    console.log('Patched:', path.relative(root, file));
  }
});

console.log('Done. Modified files:', changedFiles);

if (changedFiles === 0) process.exitCode = 0;
else process.exitCode = 0; // still success; backups created
