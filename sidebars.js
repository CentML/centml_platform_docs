/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'home/introduction',
        'home/quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Deployments',
      collapsed: false,
      items: [
        'apps/llm',
        'apps/inference',
        'apps/compute',
      ],
    },
    {
      type: 'category',
      label: 'Clients',
      collapsed: false,
      items: [
        'clients/setup',
        'clients/sdk',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'resources/custom_image',
        'resources/private',
        'resources/json_and_tool',
        'resources/requesting_support',
        'resources/vault',
        'resources/model_integration_lifecycle',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'examples/codex',
        'examples/flux',
        'examples/json_schema',
      ],
    },
  ],
};

module.exports = sidebars;
