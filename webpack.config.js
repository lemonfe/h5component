var path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "js"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  module: {
    loaders: [
      {test: /\.css$/,loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      {test: /\.svg/, loader: 'svg-url-loader'}
    ]
  }
}