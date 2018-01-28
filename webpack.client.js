const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

config = {
  // tell webpack the root file of server app
  entry: "./src/client/client.js",

  // tell webpack where to upt the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};

module.exports = merge(baseConfig, config);
