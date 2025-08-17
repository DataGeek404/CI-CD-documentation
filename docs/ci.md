
---

## `docs/ci.md`

```markdown
# 6. Continuous Integration (CI)

CI ensures all code passes **quality gates** before merging.

---

## 🛠️ GitHub Actions Workflow

File: `.github/workflows/ci.yml`

```yaml
name: CI

on:
  pull_request:
  push:
    branches: [development, master]

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm test -- --ci
      - run: npm run typecheck
