module.exports = {
  context: __dirname + "/src",
  entry: "./index",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },
}
