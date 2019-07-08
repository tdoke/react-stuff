const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: path.join(__dirname, "src", "client", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "client", "index.html")
    }),
  ],
  resolve: {
    alias: {
      client: path.join(__dirname, 'src/client') // use absolute path 'client/..' instead of relative hell '../../../'
    }
  }
}