const path = require('path');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(ts|tsx)"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm"
  ],
  docs: {
    autodocs: true
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "../src/"),
    };
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};