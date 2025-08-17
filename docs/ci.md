# 9 CI/CD Setup

## Overview

Setting up a **CI/CD pipeline** is the foundation of modern software delivery.  
The setup involves choosing tools, configuring environments, integrating source control, and automating workflows to ensure **faster, consistent, and reliable deployments**.  

This section provides a step-by-step guide to setting up a CI/CD pipeline, from **infrastructure preparation** to **pipeline configuration**.

---

## 1. Prerequisites

Before setting up CI/CD, ensure the following:

- **Source Code Management (SCM):**
  - Git-based repository (GitHub, GitLab, Bitbucket, Azure Repos).
  - Branching strategy in place (e.g., GitFlow, Trunk-Based Development).

- **Infrastructure:**
  - Cloud provider (AWS, Azure, GCP) or on-premise servers.
  - Container platform (Docker, Kubernetes) if needed.

- **Tools Installed:**
  - CI/CD system (Jenkins, GitHub Actions, GitLab CI, CircleCI, or Azure DevOps).
  - Build tools (Maven, Gradle, npm, pip).
  - Testing frameworks (JUnit, PyTest, Jest, Selenium, Cypress).
  - Deployment tools (Helm, Ansible, Terraform).

---

## 2. Setup Steps

### Step 1: Configure Source Control
- Create a **Git repository** for your project.
- Define **branching rules** (e.g., main branch protected, PRs required).
- Enable hooks for **automated CI/CD triggers** on push or merge.

---

### Step 2: Provision Environments
- **Development:** Local dev machines or sandbox environments.  
- **Staging/Test:** Pre-production environment mirroring production.  
- **Production:** Customer-facing live environment.  

Use **Infrastructure as Code (IaC)** (Terraform, Ansible, Pulumi) to ensure environments are **repeatable and consistent**.

---

### Step 3: Select a CI/CD Tool
- **Cloud-native:** GitHub Actions, GitLab CI, Bitbucket Pipelines, Azure DevOps.  
- **Self-hosted:** Jenkins, TeamCity, Bamboo.  
- **Container-native:** ArgoCD, Tekton, Spinnaker.  

Criteria for selection:
- Team expertise.
- Ecosystem compatibility.
- Security and compliance needs.
- Cost considerations.

---

### Step 4: Define the Pipeline
A pipeline usually includes:
1. **Code Checkout** – Clone source code from repository.
2. **Build** – Compile and package code.
3. **Test** – Run unit, integration, and security tests.
4. **Artifact Management** – Store build outputs in an artifact repository (Nexus, Artifactory, GitHub Packages).
5. **Deploy** – Push artifacts to environments (staging, then production).
6. **Monitor** – Track performance, errors, and logs.

---

### Step 5: Configure Pipeline File
Each CI/CD tool uses a **pipeline configuration file** stored in the repository:

- **Jenkins:** `Jenkinsfile`
- **GitHub Actions:** `.github/workflows/ci.yml`
- **GitLab CI:** `.gitlab-ci.yml`
- **CircleCI:** `.circleci/config.yml`
- **Azure Pipelines:** `azure-pipelines.yml`

**Example (GitHub Actions):**
```yaml
name: CI Pipeline
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Build application
        run: npm run build
