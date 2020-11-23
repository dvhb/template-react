const path = require('path');
const cracoStylus = require('./craco-stylus');

module.exports = {
  babel: {},
  typescript: {
    enableTypeChecking: false,
  },
  plugins: [{ plugin: cracoStylus }],
  devServer: {},
};
