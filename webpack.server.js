const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // inform webpack we're building bundle for nodejs
  // rather than the browser
  target: "node",

  // tell webpack the root file of server app
  entry: "./src/index.js",

  // tell webpack where to upt the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};

module.exports = merge(baseConfig, config);
