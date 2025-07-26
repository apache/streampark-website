/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
const path = require('path')
// TODO: [remove] 代码块只用dark主题
const darkTheme = require('prism-react-renderer/themes/vsDark')
const lightTheme = require('prism-react-renderer/themes/vsLight');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache StreamPark',
  tagline: 'Apache StreamPark - Make stream processing easier! Easy-to-use streaming application development framework and operation platform, with Apache Flink® and Apache Spark™ supported.',
  url: 'https://streampark.apache.org/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'image/favicon.ico',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: 'ltr',
      },
      'zh-CN': {
        label: "简体中文",
        direction: 'ltr',
      },
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // config url is: https://github.com/easyops-cn/docusaurus-search-local#theme-options
        hashed: true,
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: false, // Highlight search terms on target page.
        explicitSearchResultPath: true,
        searchBarPosition: "right",
        searchBarShortcutHint: false, // Whether to show keyboard shortcut hint in search bar. Disable it if you need to hide the hint while shortcut is still enabled.
        language: ["zh", "en"],
        hideSearchBarWithNoSearchContext: true,
      }),
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          editLocalizedFiles: true,
          sidebarCollapsed: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/apache/streampark-website/edit/dev/'
        },

        blog: {
          blogSidebarCount: 15,
          postsPerPage: 6,
          showReadingTime: true,
          blogSidebarTitle: "近期文章",
          // Please change this to your repo.
          editUrl:
            'https://github.com/apache/streampark-website/edit/dev/'
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom/index.less'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      validate: function () { return true },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'StreamPark',
        logo: {
          alt: 'StreamPark Logo',
          src: 'image/logo.png',
        },
        items: [
          {
            to: '/docs/get-started/intro',
            label: 'Docs',
            position: "right",
            activeBaseRegex: `/docs`,
          },
          {
            to: '/download',
            position: "right",
            label: 'Download',
            activeBaseRegex: '/download',
          },
          {
            type: 'doc',
            docId: 'community',
            position: 'right',
            label: 'Community',
            docsPluginId: 'community'
          },
          {
            to: '/team',
            label: 'Team',
            position: "right",
            activeBaseRegex: `/team`,
          },
          {
            to: '/user',
            label: 'Users',
            position: "right",
            activeBaseRegex: `/user`,
          },
          {
            label: 'ASF',
            position: "right",
            items: [
              {
                label: "Foundation",
                to: "https://www.apache.org/",
              },
              {
                label: "License",
                to: "https://www.apache.org/licenses/",
              },
              {
                label: "Events",
                to: "https://www.apache.org/events/current-event",
              },
              {
                label: "Security",
                to: "https://www.apache.org/security/",
              },
              {
                label: "Sponsorship",
                to: "https://www.apache.org/foundation/sponsorship.html",
              },
              {
                label: 'Privacy',
                to: 'https://www.apache.org/foundation/policies/privacy.html'
              },
              {
                label: "Thanks",
                to: "https://www.apache.org/foundation/thanks.html",
              },
            ],
          },
          {
            to: '/blog',
            label: 'Blog',
            position: "right",
            activeBaseRegex: `/blog`,
          },
          {
            to: 'https://github.com/apache/streampark/issues/507',
            position: "right",
            label: 'FAQ'
          },
          {
            type: 'custom-githubstar', // custom component must be start with 'custom-'
            position: "right",
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },

      footer: {
        links: [
          {
            title: "Join Community",
            items: [
              {
                html: `
                <div class="subscribe-box btns">
                  <a class="btn btn-primary" href="https://github.com/apache/streampark"><i class="fa fa-github"></i></span><span>Github</span></a>
                  <a class="btn btn-primary" href="https://github.com/apache/streampark/issues"><i class="fa fa-slack"></i><span>Issue Tracking</span></a>
                  <a class="btn btn-primary" href="javascript:void(0)">
                    <i class="fa fa-wechat"></i>
                    <span>Wechat</span>
                    <div class="wechat-dropdown"><img src="/image/join_wechat.png" alt="weChat"></div>
                  </a>
                </div>
              `,
              }
            ],
          }
        ],
        copyright: `<div>
        <div>
          <div style="margin-bottom: 30px;">
              <img alt="Apache Software Foundation" class="footer__logo" width="400">
          </div>
        </div>

        <div>
          <span>
            Copyright © 2022-${new Date().getFullYear()}, The Apache Software Foundation</br>
            Apache StreamPark, StreamPark, Apache, the Apache feather and the Apache StreamPark project logo are either registered trademarks or trademarks of the Apache Software Foundation.
          </span>
        </div>
      </div>`,
      },

      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['powershell', 'java', 'scala', 'yaml'],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
        ],
      }

    }),

  plugins: [
    'docusaurus-plugin-less',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    async function tailwindcssPlugin(context, options) {
      return {
          name: 'docusaurus-tailwindcss',
          configurePostCss(postcssOptions) {
              // Appends TailwindCSS and AutoPrefixer.
              postcssOptions.plugins.push(require('tailwindcss'));
              postcssOptions.plugins.push(require('autoprefixer'));
              return postcssOptions;
          },
      };
  },
    // load github info
    path.resolve(__dirname, 'plugins', 'github-info')
  ],
};
module.exports = config;
