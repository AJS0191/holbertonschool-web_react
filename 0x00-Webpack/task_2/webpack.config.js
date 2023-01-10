const path = require('path')

"file-loader", "image-webpack-loader"
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'js/dashboard_main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test:/\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
