const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash:4].bundle.js'
  },
  module: {
    rules: []
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map'
});
