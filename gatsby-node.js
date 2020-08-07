const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    /* Your site config here */
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@redux": path.resolve(__dirname, "src/redux"),
        "@gFirebase": path.resolve(__dirname, "src/gFirebase"),
        "@typings": path.resolve(__dirname, "src/typings"),
      },
    },
  });
};
