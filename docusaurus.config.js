// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '大陆简中自由软件本地化工作指南',
  tagline: '本站点目前处于起草阶段，欢迎各位访客提出任何积极的建议',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lwantao.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/l10n4zh-cookbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LWanTao', // Usually your GitHub org/user name.
  projectName: 'l10n4zh-cookbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lwantao/l10n4zh-cookbook/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/lwantao/l10n4zh-cookbook/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'L10n4ZH-Cookbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/lwantao/l10n4zh-cookbook/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '推荐阅读',
            items: [
              {
                label: '版本更新历史',
                to: '/docs/intro#版本更新历史',
              },
              {
                label: '大陆简中自由软件本地化工作指南（PDF 版）',
                href: 'https://repo.aosc.io/aosc-l10n/zh_CN_l10n.pdf',
              },
            ],
          },
          {
            title: '相关社区',
            items: [
              {
                label: '安同开源社区 (AOSC)',
                href: 'https://aosc.io',
              }
            ],
          },
          {
            title: '关于本站',
            items: [
              {
                label: '站内博客',
                to: '/blog',
              },
              {
                label: 'GitHub 仓库',
                href: 'https://github.com/lwantao/l10n4zh-cookbook/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LWanTao. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','bash','c','cpp','csharp','gettext','git'],
        //Supported 'additionalLanguages' https://prismjs.com/#supported-languages
      },
    }),
};

module.exports = config;
