# 8 Glossary of CI/CD Terms

This glossary provides definitions of common terms used in **Continuous Integration (CI)**, **Continuous Delivery (CD)**, and **Continuous Deployment (CD)**.  
It serves as a quick reference for developers, DevOps engineers, and stakeholders working with CI/CD pipelines.

---

## A

- **Artifact**  
  A packaged and versioned output of the build process (e.g., JAR file, Docker image) that is stored for deployment.

- **Automation**  
  The use of scripts, pipelines, and tools to eliminate manual steps in building, testing, and deploying applications.

---

## B

- **Blue-Green Deployment**  
  A release technique that maintains two environments (“blue” for current, “green” for new). Traffic is switched to the green environment once validated.

- **Branching Strategy**  
  A workflow for managing code branches in version control (e.g., GitFlow, GitHub Flow, Trunk-Based Development).

- **Build**  
  The process of compiling source code, resolving dependencies, and generating artifacts.

---

## C

- **Canary Deployment**  
  A deployment strategy where a new version of an application is rolled out to a small subset of users before full rollout.

- **CI (Continuous Integration)**  
  The practice of frequently merging code changes into a shared repository, followed by automated builds and tests.

- **CD (Continuous Delivery/Deployment)**  
  Continuous Delivery: Automated preparation of code for production release (with manual approval).  
  Continuous Deployment: Fully automated deployment of validated changes directly to production.

- **Containerization**  
  Packaging an application and its dependencies into isolated units (e.g., Docker containers) for consistency across environments.

---

## D

- **DevOps**  
  A culture and set of practices that unify software development (Dev) and IT operations (Ops) for faster, more reliable delivery.

- **Deployment**  
  The act of releasing software into a specific environment (staging, production).

---

## E

- **Environment**  
  A runtime setup where software runs. Typical environments: Development, Testing/Staging, Production.

---

## F

- **Feature Branch**  
  A branch created for developing a specific feature, merged into the main branch after completion.

- **Feedback Loop**  
  The cycle of detecting issues, reporting them back to developers, and applying improvements.

---

## G

- **GitFlow**  
  A branching strategy with dedicated branches for features, releases, hotfixes, and main development.

---

## H

- **Hotfix**  
  A branch created to address urgent issues in production.

---

## I

- **Infrastructure as Code (IaC)**  
  Managing and provisioning infrastructure (servers, networks, storage) using code and automation tools like Terraform or Ansible.

- **Integration Tests**  
  Automated tests that validate interactions between modules or services.

---

## J

- **Jenkins**  
  A popular open-source CI/CD automation server.

---

## L

- **Logs**  
  Recorded information about system events, errors, or activities, used for debugging and monitoring.

---

## M

- **Merge Request / Pull Request (PR)**  
  A request to merge code changes from one branch into another, often used for code reviews.

- **Monitoring**  
  Continuous observation of applications, infrastructure, and pipelines to ensure performance, reliability, and availability.

---

## P

- **Pipeline**  
  An automated sequence of steps (build → test → deploy) in a CI/CD process.

- **Production**  
  The live environment where the application is accessible to end users.

---

## R

- **Regression Testing**  
  Testing existing features to ensure they still work after new changes are introduced.

- **Rollback**  
  Reverting to a previous stable version of the application after a failed deployment.

---

## S

- **SCM (Source Code Management)**  
  Tools and practices for managing code versions (e.g., Git, GitHub, GitLab, Bitbucket).

- **Secrets Management**  
  Secure handling of sensitive information like passwords, API keys, and tokens.

- **Smoke Tests**  
  A basic set of tests to quickly verify that an application runs without major failures after deployment.

---

## T

- **Test Automation**  
  The use of frameworks and tools to run tests automatically as part of CI/CD pipelines.

- **Trunk-Based Development**  
  A branching strategy where all developers work on a single branch (`main`/`master`) with frequent small commits.

---

## U

- **Unit Tests**  
  Automated tests that verify individual components or functions of the codebase.

- **Uptime**  
  The amount of time a system or application remains available and operational.

---

## V

- **Version Control System (VCS)**  
  Software tools (like Git) that manage changes to source code and track history.

---

## Z

- **Zero-Downtime Deployment**  
  A deployment approach that ensures users experience no downtime during updates (achieved via blue-green or rolling strategies).

---

## Conclusion

This glossary provides a foundation for understanding **CI/CD concepts, tools, and practices**.  
It can be expanded as your team adopts new technologies and workflows in the DevOps ecosystem.
