// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lumen Docs',
  tagline: 'Documentation for Lumen',
  favicon: 'img/favicon.ico',

  url: 'https://lumen-praxismarketing.netlify.app',
  baseUrl: '/docs/', // Ensure this is set to '/docs/'

  organizationName: 'Julian Fella',
  projectName: 'Lumen Docs',

  onBrokenLinks: 'warn', // Temporarily set to 'warn' to help identify all issues
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/intro', // Target path
            from: '/', // This will redirect from /docs/ to /docs/intro
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/CiaoFella/lumen-js/edit/main/',
          routeBasePath: '/',
          path: './docs',
          include: ['**/*.md', '**/*.mdx'],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Lumen Docs',
        logo: {
          alt: 'Lumen Logo',
          src: 'img/logo_square.svg',
        },
        items: [
          {
            href: 'https://github.com/CiaoFella/lumen-js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;