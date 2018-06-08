const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  //set up entry path. I have to input here when I need to change something.
  entry: [
    path.join(__dirname, './app/index.js')
  ],
  //A bundled result from app/index.js
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  //for development environment (set up hotloading module later)
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, //node_modules is not neede bundled everytime
        use: {
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'react'], //for using new syntax and compiling jsx into js
            plugins: ["transform-class-properties"]
          }
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './app/index.html',
      filename: 'index.html'
    })
  ]
}
