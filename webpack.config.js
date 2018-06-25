
//const HtmlWebpackPlugin = require('html-webpack-plugin');
let path=require("path")
const webpack = require('webpack');
module.exports = {
  entry: ["./src/comments/comments.js", "./src/posts/posts.js", "./app.js", "./myjs.js"],
  output: {
    filename: "main.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  },
  mode: 'development'
}