const path = require('path')
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express();
const config = require('./../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
}));

app.use(webpackHotMiddleware(compiler))

app.get(/.*/, (req, res) =>
     res.sendFile(path.resolve('index.html')),
)

// Serve the files on port 2000.
app.listen(2000, function () {
  console.log('Example app listening on port 2000!\n');
});