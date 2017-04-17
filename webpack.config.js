const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              ['env', {
                targets: {
                  browsers: ['last 2 versions']
                }
              }]
            ]
          }
        }
      }
    ]
  }
};

module.exports = config;
