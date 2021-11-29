// Tailwind
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://materiaoscura.github.io',
  pathPrefix: '/wiki',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'WikiEntry', // Required
        baseDir: './content/wiki', // Where .md files are located
        pathPrefix: '/wiki', // Add route prefix. Optional
        template: './src/templates/WikiEntry.vue', // Optional
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'BlogEntry', // Required
        baseDir: './content/blog', // Where .md files are located
        pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/BlogEntry.vue', // Optional
        plugins: [
          [
            'gridsome-plugin-remark-shiki',
            { theme: 'nord', skipInline: true },
          ],
        ],
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ],
      },
    },
  },
};
