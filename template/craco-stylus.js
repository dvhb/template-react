/* eslint-disable global-require */
const path = require('path');

const overrideWebpackConfig = ({ context, webpackConfig, pluginOptions = {} }) => {
  const { getLoader, loaderByName, throwUnexpectedConfigError } = require('@craco/craco');

  // This is mocked in Windows tests
  const { pathSep } = module.exports;

  const throwError = (message, githubIssueQuery) =>
    throwUnexpectedConfigError({
      packageName: 'craco-stylus',
      githubRepo: 'dvhb/craco-stylus',
      message,
      githubIssueQuery,
    });

  const stylusExtension = /\.styl$/;

  const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
  if (!oneOfRule) {
    throwError(
      `Can't find a 'oneOf' rule under module.rules in the ${context.env} webpack config!`,
      'webpack+rules+oneOf',
    );
  }

  const sassRule = oneOfRule.oneOf.find(rule => rule.test && rule.test.toString().includes('scss|sass'));
  if (!sassRule) {
    throwError(
      `Can't find the webpack rule to match scss/sass files in the ${context.env} webpack config!`,
      'webpack+rules+scss+sass',
    );
  }
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

    if (context.env === 'development' && rule.loader.includes(`${pathSep}style-loader${pathSep}`)) {
      stylusRule.use.push({
        loader: rule.loader,
        options: {
          ...rule.options,
          ...(pluginOptions.styleLoaderOptions || {}),
        },
      });
    } else if (rule.loader.includes(`${pathSep}css-loader${pathSep}`)) {
      stylusRule.use.push({
        loader: rule.loader,
        options: {
          ...rule.options,
          ...(pluginOptions.cssLoaderOptions || {}),
        },
      });
    } else if (rule.loader.includes(`${pathSep}postcss-loader${pathSep}`)) {
      console.log(rule.options);
      stylusRule.use.push({
        loader: rule.loader,
        options: {
          ...rule.options,
          ...(pluginOptions.postcssLoaderOptions || {}),
        },
      });
    } else if (context.env === 'production' && rule.loader.includes(`${pathSep}mini-css-extract-plugin${pathSep}`)) {
      stylusRule.use.push({
        loader: rule.loader,
        options: {
          ...rule.options,
          ...(pluginOptions.miniCssExtractPluginOptions || {}),
        },
      });
    } else if (rule.loader.includes(`${pathSep}sass-loader${pathSep}`)) {
      const defaultStylusLoaderOptions = context.env === 'production' ? { sourceMap: true } : {};
      stylusRule.use.push({
        loader: require.resolve('stylus-loader'),
        options: {
          ...defaultStylusLoaderOptions,
          ...pluginOptions.stylusLoaderOptions,
        },
      });
    }
  });

  if (pluginOptions.modifyStylusRule) {
    stylusRule = pluginOptions.modifyStylusRule(stylusRule, context);
  }
  oneOfRule.oneOf.push(stylusRule);

  console.info(stylusRule);

  const { isFound, match: fileLoaderMatch } = getLoader(webpackConfig, loaderByName('file-loader'));
  if (!isFound) {
    throwError(`Can't find file-loader in the ${context.env} webpack config!`, 'webpack+file-loader');
  }
  fileLoaderMatch.loader.exclude.push(stylusExtension);

  return webpackConfig;
};

// pathSep is mocked in Windows tests
module.exports = {
  overrideWebpackConfig,
  pathSep: path.sep,
};
