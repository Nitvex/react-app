const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};