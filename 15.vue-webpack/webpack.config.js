const htmlWebpackPlugin = require('html-webpack-plugin');
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: `${__dirname  }/src/main.js`,
  },
  output: {
    path: `${__dirname  }/dist`,
    filename: './js/[name]-[hash:8].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8888,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // inject:
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
};
