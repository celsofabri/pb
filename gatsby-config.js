/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Priscila Batistão - Fotógrafa & Designer`,
    siteUrl: `https://www.priscilabatistao.com`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'B3vv0xJQYa8JoF0J_1PBwua88aK2300exHOyiGg27dQ',
        spaceId: 'festoqeh0hmb'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      },
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-XXXXXXXXXX']
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components'
  ],
  pathPrefix: '/'
};
