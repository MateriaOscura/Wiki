// Tailwind
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteName: 'DarkMatter',
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
        plugins: [
          [
            'gridsome-plugin-remark-shiki',
            { theme: 'nord', skipInline: true }
          ]
        ]
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
            {
              theme: 'nord',
              skipInline: true
            }
          ]
        ],
        refs: {
          tags: 'Tag'
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Tag', // Required
        baseDir: './content/tags', // Where .md files are located
        pathPrefix: '/blog/tags', // Add route prefix. Optional
        template: './src/templates/Tag.vue', // Optional
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ]
      }
    }
  }
};
