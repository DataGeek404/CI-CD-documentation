# Copy-Paste Templates

Starting points for your own repositories. Every non-obvious line is commented. The workflows this repository actually runs live in [`.github/workflows/`](../.github/workflows/); these templates are generic versions of the same patterns.

| File | What it is | How to use it |
| --- | --- | --- |
| [`workflows/node-ci.yml`](workflows/node-ci.yml) | Node.js/TypeScript CI: npm cache, lint, type-check, test, build on a Node version matrix | Copy to `.github/workflows/ci.yml` |
| [`workflows/docker-build-push.yml`](workflows/docker-build-push.yml) | Buildx image build with GitHub Actions layer cache, pushed to `ghcr.io` (not on PRs) | Copy to `.github/workflows/docker.yml` |
| [`Dockerfile`](Dockerfile) | Multi-stage build of this Docusaurus site served by nginx | `docker build -f templates/Dockerfile -t cicd-docs .` |
| [`Dockerfile.dockerignore`](Dockerfile.dockerignore) | Build-context exclusions used automatically with `templates/Dockerfile` | Rename to `.dockerignore` next to your own `Dockerfile` |
| [`nginx.conf`](nginx.conf) | nginx server block: Docusaurus 404 page, caching for hashed assets | Copied into the image by the `Dockerfile` |
| [`docker-compose.yml`](docker-compose.yml) | Local production container, plus a `dev` profile with hot reload | `docker compose -f templates/docker-compose.yml up --build` |
| [`.env.example`](.env.example) | Documented variables with placeholder values | Copy to `templates/.env` (git-ignored) |

## Keeping Templates Current

- Actions are pinned to full commit SHAs with a `# vX.Y.Z` comment. Dependabot only scans `.github/workflows/`, so bump the pins here by hand, using the same SHAs as the real workflows.
- Dependabot does watch the base images in `Dockerfile` (monthly).
- `npm test` fails if any template workflow uses an unpinned action or any YAML file here stops parsing.
