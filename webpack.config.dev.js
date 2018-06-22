const webpack = require('./webpack.config');

module.exports = {
  ...webpack,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
};
