/**
 * Sidebar config for Docusaurus
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'DevOps & CI/CD',
      items: [
        'introduction',
        'overview',
        'architecture',
        'branching',
        'local-setup',        
        'ci-workflow',
        'cd-deployment',
        'monitoring',
        'troubleshooting',
        'glossary',
        'ci',
      ],
    },
    {
      type: 'category',
      label: 'Pipelines',
      items: [
        'pipelines/vercel-deployment',
      ],
    },
  ],
};
