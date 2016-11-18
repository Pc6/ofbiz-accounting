/* eslint-disable */
var path = require('path'),
  autoprefixer = require('autoprefixer'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable */

module.exports = {
  entry: path.join(__dirname, 'src/client/index.js'),

  output: {
    path: path.join(__dirname, 'static/dist'),
    publicPath: '/static',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 
          'css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss')
      }
    ]
  },

  postcss: [autoprefixer],

  resolve: {
    extensions: ['', '.css', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ofibiz Accounting',
      template: path.join(__dirname, 'static/template.ejs')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJSPlugin(),
    new ExtractTextPlugin('style.css')
  ]
};
