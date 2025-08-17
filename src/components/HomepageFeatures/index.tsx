import React from 'react';
import { CheckCircle, Zap, Shield, GitBranch, Rocket, Users } from 'lucide-react';

type FeatureItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: React.ReactNode;
  gradient: string;
  imageUrl: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automated Deployment Pipeline',
    icon: Rocket,
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    imageUrl: 'https://undraw.co/api/illustrations/server-cluster-jwwq',
    description: (
      <>
        Streamline your deployment process with automated CI/CD pipelines that 
        ensure consistent, reliable releases from development to production.
      </>
    ),
  },
  {
    title: 'Continuous Integration',
    icon: GitBranch,
    gradient: 'from-green-400 via-blue-500 to-purple-600',
    imageUrl: 'https://undraw.co/api/illustrations/version-control-9bpv',
    description: (
      <>
        Automatically build, test, and validate your code changes with every commit. 
        Catch issues early and maintain <code>code quality</code> standards.
      </>
    ),
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    imageUrl: 'https://undraw.co/api/illustrations/security-on-ff2u',
    description: (
      <>
        Built-in security scanning, vulnerability detection, and compliance checks 
        ensure your deployments meet enterprise security standards.
      </>
    ),
  },
];

function Feature({ title, icon: Icon, description, gradient, imageUrl }: FeatureItem) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
      {/* Gradient background overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-orange-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        {/* Icon and Image Container */}
        <div className="relative mb-6 h-48 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Floating icon */}
          <div className={`absolute -top-3 -right-3 p-3 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
          
          {/* Action indicator */}
          <div className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>Learn more</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CICDFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Modern CI/CD Solutions</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Accelerate Your
            </span>
            <br />
            Development Workflow
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your development process with cutting-edge CI/CD practices. 
            Deploy faster, ship better, and scale with confidence.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-gray-900 dark:text-white font-medium">Join 10,000+ teams</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-gray-900 dark:text-white font-medium">99.9% uptime</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-900 dark:text-white font-medium">Deploy in seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}