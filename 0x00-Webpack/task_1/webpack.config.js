const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/js/dashboard_main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
}
