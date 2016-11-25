/* eslint-disable */
var path = require('path'),
  autoprefixer = require('autoprefixer'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable */

module.exports = {
  devtool: 'eval-source-map',

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
        loader: 'style!css!postcss'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'static/dist'),
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
