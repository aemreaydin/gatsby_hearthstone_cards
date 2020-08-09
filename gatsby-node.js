const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    /* Your site config here */
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@redux": path.resolve(__dirname, "src/redux"),
        "@gFirebase": path.resolve(__dirname, "src/gFirebase"),
        "@typings": path.resolve(__dirname, "src/typings"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      },
    },
  });
};
