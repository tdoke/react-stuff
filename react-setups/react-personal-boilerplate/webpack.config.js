const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack'); // to read environment variables from .env file

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
    new Dotenv()
  ],
  resolve: {
    alias: {
      client: path.join(__dirname, 'src/client') // use absolute path 'client/..' instead of relative hell '../../../'
    }
  }
}