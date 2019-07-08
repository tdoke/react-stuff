
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [],
  ignore: ['node_modules'],
  compact: true,
}

