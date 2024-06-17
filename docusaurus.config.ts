import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Le programme du nouveau front populaire',
  tagline: 'Version web du programme du nouveau Front Populaire',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'nfp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Charly-CreativeApps/creativeapps-nfp',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Nouveau front populaire',
      logo: {
        alt: 'Logo nouveau front populaire',
        src: 'img/logo_nfp.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Le programme',
        },
        {
          href: 'https://github.com/Charly-CreativeApps/creativeapps-nfp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Le Programme',
          items: [
            {
              label: 'les 15 premiers jours',
              to: '/docs/category/partie-1---15-premiers-jours',
            },
            {
              label: 'les 100 premiers jours',
              to: '/docs/category/partie-2---100-premiers-jours',
            },
            {
              label: 'les mois suivants',
              to: '/docs/category/partie-3---les-mois-suivants',
            },
          ],
        },
        {
          title: 'La gauche unie',
          items: [
            {
              label: 'la France Insoumise',
              href: 'https://lafranceinsoumise.fr/',
            },
            {
              label: 'le Parti socialiste',
              href: 'https://www.parti-socialiste.fr/',
            },
            {
              label: 'Europe Ecologie Les Verts',
              href: 'https://lesecologistes.fr/',
            },
            {
              label: 'Place publique',
              href: 'https://place-publique.eu/'
            },
            {
              label: 'le Parti communiste français',
              href: 'https://www.pcf.fr/'
            }
          ],
        },
        {
          title: 'S\'informer',
          items: [
            {
              label: 'l\'Humanité',
              href: 'https://www.humanite.fr/',
            },
            {
              label: 'Libération',
              href: 'https://www.liberation.fr/',
            },
          ],
        },
      ],
      copyright: `Texte du Nouveau front populiare - site fait avec Docusaurus par CreativeApps`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
