const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/js/index.js",
    songlist: "./src/js/ms.js",
    song: "./src/js/song.js"
  },
  module: {
    rules: [
      {
        // test: /\.css$/,
        // use: extractCSS.extract([ "css-loader" , "postcss-loader"])
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!autoprefixer-loader"
        })
      }
    ]
  },

  resolve: {
    alias: {
      jquery: path.join(__dirname, "src/js/lib/jQuery/jquery.min.js")
    }
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings:false
      }
    }),    
    new ExtractTextPlugin("[name].css"),

     new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    new CleanWebpackPlugin(["dist"]),

  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

};
