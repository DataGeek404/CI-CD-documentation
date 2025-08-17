# 5 Continuous Delivery & Deployment 

## Overview

**Continuous Delivery (CD)** and **Continuous Deployment (CD)** are the second half of the CI/CD pipeline, following Continuous Integration (CI).  
They focus on automatically delivering and deploying tested and validated code into production or production-like environments.  

- **Continuous Delivery**: Ensures that every code change is **always in a deployable state**. Deployments to production may still require **manual approval**.  
- **Continuous Deployment**: Extends delivery by **automating deployments into production** without human intervention, making software updates available to users immediately.  

---

## Objectives of CD Deployment

- **Automated, repeatable deployments** across environments.  
- **Rapid and reliable release cycles** without downtime.  
- **Consistent infrastructure** to reduce deployment errors.  
- **Improved release confidence** through staging and pre-production checks.  
- **Faster feedback from end-users**.  

---

## Key Stages of a CD Deployment Workflow

### 1. **Artifact Retrieval**
- Retrieves build artifacts from the **artifact repository** (e.g., Nexus, JFrog Artifactory, Docker Registry).  
- Ensures deployment is based on **tested and versioned artifacts**, not raw code.

---

### 2. **Infrastructure Provisioning**
- Automates the creation of servers, containers, or cloud resources using **Infrastructure as Code (IaC)**.  
- Tools: Terraform, AWS CloudFormation, Ansible, Pulumi.  
- Ensures environments (dev, staging, production) are consistent and reproducible.

---

### 3. **Configuration Management**
- Ensures that applications are deployed with correct configurations (environment variables, secrets, endpoints).  
- Tools: Ansible, Chef, Puppet, Kubernetes ConfigMaps & Secrets, Vault.  

---

### 4. **Deployment Strategies**
Different strategies ensure zero downtime and safe releases:  

- **Recreate Deployment**  
  - Old version is stopped before the new one is started.  
  - Simple but causes downtime.  

- **Rolling Updates**  
  - Gradually replaces old instances with new ones.  
  - Minimizes downtime.  

- **Blue-Green Deployment**  
  - Two environments (Blue = current, Green = new).  
  - Switch traffic to the new version instantly once validated.  
  - Easy rollback.  

- **Canary Deployment**  
  - Release new version to a small percentage of users first.  
  - Monitor results before rolling out to everyone.  

---

### 5. **Automated Testing in Deployment**
- **Smoke Tests**: Quick checks after deployment.  
- **End-to-End Tests**: Validate real-world workflows.  
- **Performance & Load Tests**: Ensure stability under traffic.  
- **Security Tests**: Validate vulnerabilities in production-like environments.  

---

### 6. **Monitoring & Observability**
- Continuous monitoring ensures smooth deployments and quick detection of issues.  
- **Metrics:** CPU, memory, response times, error rates.  
- **Logs:** Aggregated and analyzed for troubleshooting.  
- **Tools:** Prometheus, Grafana, ELK Stack, Datadog, New Relic, OpenTelemetry.  

---

### 7. **Rollback Mechanisms**
- Rollback strategies are critical in case of failed deployments.  
- Options:  
  - Revert to last stable version from artifact repository.  
  - Traffic switch in blue-green or canary deployments.  
  - Automated rollback triggered by monitoring alerts.  

---

## Example CD Deployment Workflow

### ASCII Diagram
```text
       +--------------------+
       |  Artifact Storage  |
       +--------------------+
                │
                ▼
   +------------------------+
   | Infrastructure as Code |
   +------------------------+
                │
                ▼
   +------------------------+
   | Configuration & Secrets|
   +------------------------+
                │
                ▼
   +------------------------+
   |   Deployment Strategy  |
   | (Blue-Green, Canary)   |
   +------------------------+
                │
                ▼
   +------------------------+
   | Automated Validation   |
   +------------------------+
                │
                ▼
   +------------------------+
   | Monitoring & Rollback  |
   +------------------------+
