const webpack = require('webpack'),
      path = require('path');

const BUILD_DIR = path.resolve(__dirname, './app'),
      SRC_DIR = path.resolve(__dirname, './src');

const config = {
  entry: SRC_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
