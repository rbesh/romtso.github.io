var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './client');

var config = {
  //entry: './client/',
  entry: APP_DIR + '/index.js',
  target: 'web',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude : /node_modules/,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
