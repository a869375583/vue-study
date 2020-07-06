const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = {
  mode:'development',
  devServer:{
    contentBase:"./dist",
    hot:true,
    port:8888
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:[
          'vue-style-loader',
          {
            loader:'css-loader',
            options:{
              sourceMap:true
            }
          },
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
          {
            loader:'sass-loader',
            options:{
              sourceMap:true
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
}
module.exports = merge(baseConfig,config)