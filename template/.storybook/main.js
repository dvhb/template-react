module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const sassRule = oneOfRule.oneOf.find(rule => rule.test && rule.test.toString().includes('scss|sass'));
    const stylusExtension = /\.styl$/;

    let stylusRule = {
      exclude: /\.module\.(stylus)$/,
      test: stylusExtension,
      use: [],
    };

    const loaders = sassRule.use || sassRule.loader;

    loaders.forEach(ruleOrLoader => {
      let rule;
      if (typeof ruleOrLoader === 'string') {
        rule = {
          loader: ruleOrLoader,
          options: {},
        };
      } else {
        rule = ruleOrLoader;
      }

      if (rule.loader.includes(`style-loader`)) {
        stylusRule.use.push({
          loader: rule.loader,
        });
      } else if (rule.loader.includes(`css-loader`)) {
        stylusRule.use.push({
          loader: rule.loader,
        });
      } else if (rule.loader.includes(`postcss-loader`)) {
        stylusRule.use.push({
          loader: rule.loader,
          options: {
            ...rule.options,
          },
        });
      } else if (rule.loader.includes(`sass-loader`)) {
        const defaultStylusLoaderOptions = { sourceMap: true };
        stylusRule.use.push({
          loader: require.resolve('stylus-loader'),
          options: {
            ...defaultStylusLoaderOptions,
          },
        });
      }
    });

    oneOfRule.oneOf.push(stylusRule);

    console.log(stylusRule);
    // Return the altered config
    return config;
  },
};
