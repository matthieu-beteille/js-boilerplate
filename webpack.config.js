var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      "webpack/hot/only-dev-server",
      "./src/index.js"
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "app/bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loaders: ['babel?stage=0&optional[]=runtime'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=[hash:8].[name].[ext]'
      }
    ]
  }
};
