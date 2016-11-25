/* eslint-disable */
var path = require('path'),
  autoprefixer = require('autoprefixer'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable */

module.exports = {
  entry: path.join(__dirname, 'src/client/index.jsx'),

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
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('style.css')
  ]
};
