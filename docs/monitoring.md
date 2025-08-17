# 6 Monitoring in CI/CD

## Overview

**Monitoring** in a CI/CD pipeline refers to the continuous observation of applications, infrastructure, and pipeline processes to ensure that deployed software runs smoothly, reliably, and securely.  

Monitoring provides **real-time insights** into:
- Application performance.
- System resource utilization.
- Error rates and failures.
- Deployment health.
- User experience.  

By integrating monitoring into CI/CD, teams establish a **feedback loop** that helps developers detect issues quickly, roll back when necessary, and continuously improve applications.

---

## Objectives of Monitoring in CI/CD

1. **Detect Failures Early:** Identify deployment errors, performance degradation, or security threats.  
2. **Ensure Reliability:** Confirm that new releases don’t negatively impact users.  
3. **Enable Rollbacks:** Trigger automated rollbacks on critical issues.  
4. **Collect Feedback:** Provide insights to developers and product owners for continuous improvement.  
5. **Maintain SLAs/SLOs:** Ensure uptime and performance meet agreed standards.  

---

## Types of Monitoring

### 1. **Application Monitoring**
- Tracks how the application behaves in real time.  
- Metrics include response times, throughput, error rates.  
- Tools: **New Relic, Datadog, AppDynamics, Prometheus**.  

### 2. **Infrastructure Monitoring**
- Focuses on servers, containers, and cloud resources.  
- Metrics include CPU, memory, disk usage, network latency.  
- Tools: **Prometheus + Grafana, Nagios, Zabbix, CloudWatch**.  

### 3. **Pipeline Monitoring**
- Observes the CI/CD process itself (build failures, deployment times, success rates).  
- Provides visibility into bottlenecks in the pipeline.  
- Tools: **Jenkins Blue Ocean, GitLab CI/CD dashboards, GitHub Actions insights**.  

### 4. **Log Monitoring**
- Aggregates logs from applications, containers, and infrastructure.  
- Enables searching, tracing, and troubleshooting issues.  
- Tools: **ELK Stack (Elasticsearch, Logstash, Kibana), Fluentd, Splunk**.  

### 5. **Security Monitoring (DevSecOps)**
- Identifies vulnerabilities, threats, and breaches.  
- Includes scanning dependencies, monitoring traffic, detecting anomalies.  
- Tools: **Aqua Security, Snyk, Falco, Wazuh**.  

---

## Key Metrics to Monitor

- **System Metrics:** CPU, memory, disk I/O, network latency.  
- **Application Metrics:** API response times, error rates (HTTP 5xx, 4xx), transaction times.  
- **Deployment Metrics:** Deployment duration, rollback frequency, failure rates.  
- **User Experience Metrics:** Page load time, crash rates, latency.  
- **Business Metrics:** Conversion rates, customer churn, revenue impact.  

---

## Monitoring Workflow in CI/CD

### ASCII Diagram
```text
   +------------------+
   | Code Deployment  |
   +------------------+
            │
            ▼
   +------------------+
   | Application Runs |
   +------------------+
            │
            ▼
   +------------------------+
   | Monitoring & Logging   |
   +------------------------+
            │
            ▼
   +------------------------+
   | Alerts & Notifications |
   +------------------------+
            │
            ▼
   +------------------------+
   | Developer Feedback Loop|
   +------------------------+
