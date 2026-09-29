// Every doc page must be reachable from the sidebar.
// Docusaurus already fails the build when sidebars.ts references a missing doc;
// this test covers the opposite case: a page that exists but was never added.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DOCS_DIR = 'docs';

// Pages deliberately left out of the sidebar (Docusaurus starter content).
const UNLISTED_OK = [
  'intro',
  /^tutorial-basics\//,
  /^tutorial-extras\//,
  // Duplicates of `ci`; removed in the final cleanup pass.
  'setup',
  'set-up -ci-cd',
];

function listDocs(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return listDocs(path);
    return /\.mdx?$/.test(entry.name) && !entry.name.startsWith('_') ? [path] : [];
  });
}

// Doc id = path relative to docs/ without extension, unless front matter sets `id:`.
function docId(file) {
  const base = relative(DOCS_DIR, file).split(sep).join('/').replace(/\.mdx?$/, '');
  const frontMatter = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const id = frontMatter?.[1].match(/^id:\s*['"]?([^'"\r\n]+)/m)?.[1];
  if (!id) return base;
  const dir = base.includes('/') ? base.slice(0, base.lastIndexOf('/') + 1) : '';
  return dir + id.trim();
}

test('every doc under docs/ is listed in sidebars.ts', () => {
  const sidebar = readFileSync('sidebars.ts', 'utf8');
  const listed = new Set([...sidebar.matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]));

  const missing = listDocs(DOCS_DIR)
    .map(docId)
    .filter((id) => !UNLISTED_OK.some((rule) => (rule instanceof RegExp ? rule.test(id) : rule === id)))
    .filter((id) => !listed.has(id));

  assert.deepEqual(missing, [], `Add these doc ids to sidebars.ts: ${missing.join(', ')}`);
});
