const { createWebpackDevConfig } = require('@craco/craco');
const cracoConfig = require('../craco.config.js');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const configCra = createWebpackDevConfig({
      ...cracoConfig,
      webpack: { configure: config },
    });
    const oneOfRuleCraco = configCra.module.rules.find(rule => rule.oneOf);
    const stylusRule = oneOfRuleCraco.oneOf[oneOfRuleCraco.oneOf.length - 1];
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    oneOfRule.oneOf.unshift(stylusRule);

    // Return the altered config
    return config;
  },
};
