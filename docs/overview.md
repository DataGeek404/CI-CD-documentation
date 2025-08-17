# 1. Overview

This documentation provides a **production-ready DevOps & CI/CD workflow**.  

We focus on GitHub for source control, GitHub Actions for CI, and Vercel for CD, with separate deployments for **staging** (`development` branch) and **production** (`master` branch).

---

## 🔑 Key Components

- **Source Control:** GitHub
- **CI:** GitHub Actions
- **CD:** Vercel  
  - `development` → Staging  
  - `master` → Production
- **Quality Gates:** Lint, unit tests, type checks
- **Observability:** Vercel Analytics, error tracking (Sentry optional)

---

## 🎯 Goals

- Safe, repeatable deployments
- Clear separation of staging vs production
- Fast feedback via automated builds/tests
