/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        { type: 'doc', id: 'home/introduction', customProps: { icon: 'house' } },
        { type: 'doc', id: 'home/quickstart', customProps: { icon: 'rocket-launch' } },
      ],
    },
    {
      type: 'category',
      label: 'Deployments',
      collapsed: false,
      items: [
        { type: 'doc', id: 'apps/llm', customProps: { icon: 'messages' } },
        { type: 'doc', id: 'apps/dynamo', customProps: { icon: 'waypoints' } },
        { type: 'doc', id: 'apps/inference', customProps: { icon: 'circle-nodes' } },
        { type: 'doc', id: 'apps/compute', customProps: { icon: 'microchip' } },
        { type: 'doc', id: 'apps/jobs', customProps: { icon: 'list-checks' } },
      ],
    },
    {
      type: 'category',
      label: 'Clients',
      collapsed: false,
      items: [
        { type: 'doc', id: 'clients/setup', customProps: { icon: 'square-terminal' } },
        { type: 'doc', id: 'clients/sdk', customProps: { icon: 'python' } },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        { type: 'doc', id: 'resources/custom_image', customProps: { icon: 'screwdriver-wrench' } },
        { type: 'doc', id: 'resources/hardware_instances', customProps: { icon: 'server' } },
        { type: 'doc', id: 'resources/grpc', customProps: { icon: 'waypoints' } },
        { type: 'doc', id: 'resources/nim', customProps: { icon: 'box-open-full' } },
        { type: 'doc', id: 'resources/trtllm', customProps: { icon: 'gauge' } },
        { type: 'doc', id: 'resources/private', customProps: { icon: 'lock' } },
        { type: 'doc', id: 'resources/service_accounts', customProps: { icon: 'bot' } },
        { type: 'doc', id: 'resources/json_and_tool', customProps: { icon: 'user-secret' } },
        { type: 'doc', id: 'resources/requesting_support', customProps: { icon: 'headset' } },
        { type: 'doc', id: 'resources/vault', customProps: { icon: 'key-skeleton-left-right' } },
        { type: 'doc', id: 'resources/model_integration_lifecycle', customProps: { icon: 'arrows-spin' } },
      ],
    },
  ],
};

module.exports = sidebars;
