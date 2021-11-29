// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
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
      },
    },
  ],
  siteUrl: 'https://materiaoscura.github.io',
  pathPrefix: '/wiki',
};
