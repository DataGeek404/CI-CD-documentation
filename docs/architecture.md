# 2. Architecture

The CI/CD pipeline ensures that code passes quality gates before being deployed to staging or production.

```mermaid
graph TD;
  Dev[Developer]-->GH[GitHub];
  GH-->CI[GitHub Actions];
  CI-->Vercel[Vercel Deploy];
  Vercel-->Users[(Users)];

Developer → GitHub (PRs) → GitHub Actions (CI) → Vercel (Preview/Staging/Prod)
                               |
                               └─ Quality Gates (lint/test/typecheck)

Component Summary

App: Node/React/Next.js app (or static site)

CI: GitHub Actions jobs triggered on PRs & pushes

CD: Vercel deployments

Preview Deployments for every non-protected branch/PR

development → Staging

master → Production


---

# 📄 Section 3: Environments Example

### `docs/environments.md`

```markdown
# 3. Environments

Different branches map to different deployment environments.

---

## 🌍 Environment Table

| Environment | Branch        | Domain (example)                     | Purpose                     |
| ----------- | ------------- | ------------------------------------ | --------------------------- |
| Staging     | `development` | `staging.yourapp.com` (optional)     | UAT, QA, stakeholder review |
| Production  | `master`      | `yourapp.com` / `project.vercel.app` | Live users                  |

---

## 🔑 Notes

- Preview deployments are auto-created for PRs (great for QA).  
- Assign a **custom staging domain** if you want a permanent URL for the `development` branch.  
- Keep staging and production environment variables **separate** in Vercel.
