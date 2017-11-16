const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/main.js",
   plugins: [
//   new HtmlWebpackPlugin({
//        title: '首页'
//     }),
    new CleanWebpackPlugin(['dist']),
    ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
