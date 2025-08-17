# 2. Architecture

The CI/CD pipeline ensures that code passes quality gates before being deployed to staging or production.

```mermaid
graph TD;
  Dev[Developer]-->GH[GitHub];
  GH-->CI[GitHub Actions];
  CI-->Vercel[Vercel Deploy];
  Vercel-->Users[(Users)];
