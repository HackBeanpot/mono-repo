import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `live-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://hackbeanpot.us10.list-manage.com/subscribe/post?u=a98050d47fdae2481521f0474&id=dccd8c8431&f_id=00e336e2f0'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './lib/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
};

export default config;
