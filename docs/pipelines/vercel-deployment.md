---
sidebar_label: Vercel Deployment (this site)
description: How this repository deploys to Vercel from GitHub Actions, the secrets it needs, and the safe rollout order.
---

# Vercel Deployment from GitHub Actions

This site is deployed to Vercel by [`.github/workflows/deploy-vercel.yml`](https://github.com/Prime-victor/CI-CD-documentation/blob/master/.github/workflows/deploy-vercel.yml) instead of Vercel's built-in Git integration. Deploying from Actions lets production wait for CI to pass and keeps every deploy step visible in the same place as the tests.

---

## When to Use This

- You want production deploys **gated on CI** (lint, type-check, tests, build) rather than racing it.
- You need custom steps before or after deploy (smoke tests, notifications, approvals via [GitHub Environments](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment)).
- If you just want "push → deploy" with no gate, Vercel's Git integration alone is simpler.

---

## What the Workflow Does

| Trigger | Job | Result |
| --- | --- | --- |
| Pull request to `master`/`main` (same repo, not Dependabot) | `preview` | Preview deployment; URL posted as a sticky PR comment |
| `CI` workflow succeeds on a push to `master`/`main` | `production` | Production deployment of the exact commit CI tested |
| Manual **Run workflow** (`workflow_dispatch`) | `production` | Production (re)deploy of the selected branch |

Each job runs the three commands from Vercel's guide:

```bash
vercel pull --yes --environment=preview --token="$VERCEL_TOKEN"   # project settings + env vars
vercel build --token="$VERCEL_TOKEN"                              # builds into .vercel/output
vercel deploy --prebuilt --token="$VERCEL_TOKEN"                  # uploads the prebuilt output
```

Production uses `--environment=production` for `pull` and adds `--prod` to `build` and `deploy`.

---

## Setup

### 1. Get the project and org IDs

```bash
npx vercel login
npx vercel link          # creates .vercel/project.json (git-ignored)
cat .vercel/project.json # {"projectId":"...","orgId":"..."}
```

### 2. Create a token

Create an access token at [vercel.com/account/tokens](https://vercel.com/account/tokens). Scope it to the team that owns the project and give it an expiry date.

### 3. Add three repository secrets

**Settings → Secrets and variables → Actions → New repository secret**, or with the GitHub CLI:

```bash
gh secret set VERCEL_TOKEN      --body "YOUR_TOKEN_HERE"
gh secret set VERCEL_ORG_ID     --body "YOUR_ORG_ID_HERE"
gh secret set VERCEL_PROJECT_ID --body "YOUR_PROJECT_ID_HERE"
```

If any are missing, the first step of each job fails with `Missing repository secrets: ...`.

---

## Rollout Order

:::warning Do these steps in order

1. **Keep Vercel's Git integration on** while you add the three secrets.
2. **Open a pull request** and confirm the `Preview deployment` job succeeds and posts a working URL.
3. **Only then merge** the separate commit that adds `vercel.json` with:

   ```json
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "git": { "deploymentEnabled": false }
   }
   ```

Until step 3, every change is deployed twice (once by Vercel's Git integration, once by Actions). That is harmless but wasteful. Doing step 3 **first** would leave the site with no working deployment path if the secrets are wrong.

:::

---

## Common Pitfalls

- **No preview on fork or Dependabot PRs.** GitHub does not pass repository secrets to those runs, so the `preview` job is skipped by its `if:` condition.
- **Production never triggers.** `workflow_run` only fires when the workflow file exists on the **default branch**; it will not run from a feature branch. The `workflows: [CI]` value must match the `name:` in `ci.yml`.
- **CLI version drift.** `VERCEL_CLI_VERSION` is pinned in the workflow and is not updated by Dependabot; bump it deliberately.
- **Build settings come from Vercel.** `vercel pull` downloads the project's build command and environment variables; change them in the Vercel dashboard, not in the workflow.

---

## Official Docs

- [Vercel: How can I use GitHub Actions with Vercel?](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)
- [Vercel: `git.deploymentEnabled`](https://vercel.com/docs/project-configuration/git-configuration)
- [Vercel CLI: `vercel deploy`](https://vercel.com/docs/cli/deploy)
- [GitHub Actions: `workflow_run` event](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#workflow_run)
- [GitHub Actions: using secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
