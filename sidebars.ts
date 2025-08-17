/**
 * Sidebar config for Docusaurus
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'DevOps & CI/CD',
      collapsed: false,
      items: [
        'introduction',
        'overview',
        'architecture',
        'environments',
        'branching',
        'local-setup',
        'ci',
        'ci-workflow',
        'cd-vercel',
        'cd-deployment',
        'env-secrets',
        'testing-quality',
        'linting-precommit',
        'docker',
        'monitoring',
        'troubleshooting',
        'releases',
        'rollbacks',
        'runbooks',
        'faq',
        'glossary',
      ],
    },
  ],
};
