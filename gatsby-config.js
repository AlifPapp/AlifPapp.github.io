/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `alifpapp`,
    siteUrl: `https://alifpapp.me`,
    pathPrefix: '/',
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-cname`,
      options: {
        hostname: `alifpapp.me`,
      },
    },
  ]
};