const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bundle\.js)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bundle\.js)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /(\.css$|\.scss$)/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
