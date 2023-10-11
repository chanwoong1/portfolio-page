/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

import { GatsbyNode } from 'gatsby';
import path from 'path';

// Setup Import Alias
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ getConfig, actions }) => {
  const output = getConfig()?.output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'src/images'),
        static: path.resolve(__dirname, 'static'),
      },
    },
  });
};
