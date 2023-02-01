const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    open:true,
    hot: true,
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test:/\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', "@babel/preset-react"],
            }
          }
        },
        {
          test: /\.svg/,
          use: {
            loader: "svg-url-loader",
            options: {
              // make all svg images to work in IE
              iesafe: true,
            },
          },
        },
      ]
    }
  }
