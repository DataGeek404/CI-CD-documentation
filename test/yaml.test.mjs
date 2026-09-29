// YAML checks: config files and templates must parse, workflows must pin
// third-party actions to a full commit SHA, and ```yaml examples in the docs
// must be valid (use ```text for deliberately broken snippets).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseAllDocuments } from 'yaml';

const IGNORED_DIRS = new Set(['node_modules', 'build', '.docusaurus', '.git']);

function walk(dir, pattern) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (IGNORED_DIRS.has(entry.name)) return [];
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path, pattern);
    return pattern.test(entry.name) ? [path] : [];
  });
}

function yamlErrors(source) {
  return parseAllDocuments(source).flatMap((doc) => doc.errors.map((e) => e.message));
}

const yamlFiles = [
  ...walk('.github', /\.ya?ml$/),
  ...walk('templates', /\.ya?ml$/),
  ...walk('blog', /\.ya?ml$/),
];
const workflowFiles = [
  ...walk(join('.github', 'workflows'), /\.ya?ml$/),
  ...walk(join('templates', 'workflows'), /\.ya?ml$/),
];

test('YAML files parse', () => {
  assert.ok(yamlFiles.length > 0, 'expected at least one YAML file');
  for (const file of yamlFiles) {
    assert.deepEqual(yamlErrors(readFileSync(file, 'utf8')), [], file);
  }
});

test('workflow actions are pinned to a full commit SHA', () => {
  for (const file of workflowFiles) {
    const lines = readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, i) => {
      const ref = line.match(/^\s*(?:-\s+)?uses:\s*['"]?([^'"\s#]+)/)?.[1];
      // Local actions (./path) and docker:// images are not pinned by SHA.
      if (!ref || ref.startsWith('./') || ref.startsWith('docker://')) return;
      assert.match(ref, /@[0-9a-f]{40}$/, `${file}:${i + 1} ${ref} is not pinned to a commit SHA`);
    });
  }
});

test('```yaml code blocks in docs parse', () => {
  const pages = [...walk('docs', /\.mdx?$/), ...walk('blog', /\.mdx?$/)];
  for (const page of pages) {
    const source = readFileSync(page, 'utf8');
    for (const block of source.matchAll(/^```ya?ml[^\n]*\n([\s\S]*?)^```/gm)) {
      const line = source.slice(0, block.index).split('\n').length;
      assert.deepEqual(yamlErrors(block[1]), [], `${page}:${line}`);
    }
  }
});
