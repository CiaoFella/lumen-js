// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro', // Ensure this file exists in the `docs` directory
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/bar-hover',
        'features/color-change',
        'features/cycle-element',
        'features/menu',
        'features/preloader',
        'features/text-scroll',
        'features/video-player',
      ]
    },
  ],
};

export default sidebars;