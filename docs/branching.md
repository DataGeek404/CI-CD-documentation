# 4. Branching Strategy

We use a **trunk-based branching strategy** with two protected branches:

- `master`: Production
- `development`: Staging

---

## 🔀 Workflow

1. **Feature Branch**
   - Branch from `development`
   - Example: `feature/login-ui`
2. **Pull Request**
   - Merge into `development`
   - CI runs: lint + tests
   - Preview deployment auto-created on Vercel
3. **Promotion to Production**
   - Merge `development` → `master`
   - Triggers production CI/CD

---

## ✅ Benefits

- Clear staging vs production environments
- Fast feature testing with preview deployments
- Minimal long-lived branches
# 5. Local Development Setup

---

## 📦 Requirements

- Node.js 18+
- npm or yarn
- Git
- Docker (optional, for parity)

---

## 🚀 Setup Steps

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
npm install
npm run dev
