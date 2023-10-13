import type { GatsbyConfig } from "gatsby";
import siteMetaData from "./gatsby-site-meta-data";

const config: GatsbyConfig = {
  siteMetadata: siteMetaData,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chanwoong's portfolio`,
        short_name: `chanwoong's portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./static/favicon.png`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    "gatsby-transformer-remark",
  ],
};

export default config;
