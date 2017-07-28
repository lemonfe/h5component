var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader"},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {

        test: /\.(png)|(jpg)$/,

        loader: "url-loader?limit=50000"

      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),

  ]
}
