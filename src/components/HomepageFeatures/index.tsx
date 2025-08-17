import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
  image: string;
  
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automated Pipelines',
    description: 'CI/CD automates builds, tests, and deployments, reducing manual effort and accelerating delivery.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    
  },
  {
    title: 'Continuous Integration',
    description: 'Developers merge code frequently, triggering automated builds and tests to detect issues early.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80',
    
  },
  {
    title: 'Continuous Deployment',
    description: 'Code changes move seamlessly to staging or production after passing all tests.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    
  },
  {
    title: 'Monitoring & Feedback',
    description: 'Real-time monitoring ensures fast incident detection, resolution, and continuous improvement.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automate infrastructure provisioning with Terraform, Ansible, or Pulumi for consistency and speed.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
    
  {
    title: 'Security & Compliance',
    description: 'Embed automated security scans into the pipeline to prevent vulnerabilities before production.',
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=600&q=80',
    
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automate infrastructure provisioning with Terraform, Ansible, or Pulumi for consistency and speed.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
    
  {
    title: 'Security & Compliance',
    description: 'Embed automated security scans into the pipeline to prevent vulnerabilities before production.',
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=600&q=80',
    
  },
];

function Feature({ title, description, image, icon }: FeatureItem) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        {/* Image with overlay */}
        <div className={styles.cardImage}>
          <img src={image} alt={title} />
          <div className={styles.icon}>{icon}</div>
        </div>

        {/* Content */}
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function CICDFeatures() {
  return (
    <section className={styles.section}>
      <div className="relative container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={styles.badge}>
            <span className="text-2xl mr-2">🚀</span>
            <span>DevOps Ready</span>
          </div>

          <h2 className={styles.heading}>
            Modern{' '}
            <span className={styles.gradientText}>CI/CD</span>{' '}
            Workflows
          </h2>

          <p className={styles.subtext}>
            Accelerate your software lifecycle with automation, fast feedback, and secure deployments.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <div
              key={idx}
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              <Feature {...props} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.cta}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaItem}>✅ Automated Testing</div>
            <div className={styles.ctaItem}>⚡ Zero-Downtime</div>
            <div className={styles.ctaItem}>🔐 Secure Pipelines</div>
            <div className={styles.ctaItem}>📈 Real-time Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}
