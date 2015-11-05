require('colors')
var express = require('express')
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

// express server
var app = express()
app.get('*', function(req, res) {
  res.sendFile(path.resolve('.', 'views', 'index.html'));
});
app.listen(4000);
console.log('[express-server]'.bold.blue + ' listening on port 4000.'.bold);

// dev server
var compiler = webpack(config);
var devServer = new WebpackDevServer(compiler, {
  hot: true,
  proxy: {
    '*': 'http://localhost:4000'
  },
  quiet: false,
  noInfo: false,
  stats: { colors: true },
});

devServer.listen(8080, function() {
  console.log('[webpack-dev-server]'.bold.green + ' launched on port 8080.'.bold);
});
