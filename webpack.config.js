var webpack = require('webpack'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    // HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
    path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: 'js/[name].bundle.js',
    // publicPath: 'http://localhost/muyou/tpl/dist/'
  },
  module: {
    loaders: [{
      test: require.resolve('jquery'),
      loader: 'expose-loader?jQuery!expose-loader?$'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, 'src'),
      exclude: path.resolve(__dirname, 'node_modules'),
      query: {
        presets: ['latest']
      }
    }, {
      test: /\.jade$/,
      loader: "jade-loader",
      options:{
        pretty: true
      }

    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/i,
      loaders: [
        'url-loader?limit=10000&name=assets/[name].[ext]',
        'img-loader'
      ]
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader'
    },

    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      title: '首页',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['main']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new webpack.HotModuleReplacementPlugin(),

    // // new HtmlWebpackInlineSourcePlugin()
    //  new webpack.optimize.CommonsChunkPlugin('common')
  ]
}
