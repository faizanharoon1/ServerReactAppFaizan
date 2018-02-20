const path = require("path");

module.exports = {
 
    // Tell webpack , the root file of our client app
    entry: "./src/client/client.js",
    // tell webpack where to put the output file that is generated on the browser
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "public")
    },
    // Tell webpack to run babel on every file it runs through.
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "react",
              "stage-0",
              ["env", { targets: { browsers: ["last 2 versions"] } }]
            ]
          }
        }
      ]
    }
  };
  