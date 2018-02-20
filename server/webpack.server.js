const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack we are buildign a bundle for nodeJs, rather than for browser
  target: "node",

  // Tell webpack , the root file of our server app
  entry: "./src/index.js",
  // tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals:[webpackNodeExternals()]
}; 

module.exports = merge(baseConfig,config);