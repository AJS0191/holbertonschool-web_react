const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

"all"
module.exports = {
  mode: 'development',
  devServer: {
    port: 8564,
    contentBase: './public'
  },
  entry: {
    header: path.resolve(__dirname, './modules/header/header.js'),
    body: path.resolve(__dirname, './modules/body/body.js'),
    footer: path.resolve(__dirname, './modules/footer/footer.js'),
},
  devtool: 'inline-source-m ap',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
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
