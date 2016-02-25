var webpack = require('webpack')

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000",
    "webpack/hot/only-dev-server",
    "./src/index",
  ],

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/static/"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      }
    ],
  },
}
