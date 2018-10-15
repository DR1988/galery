const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
  entry: [
    './app/index.js',
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?importLoaders=1'],
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(otf|ttf|eot)$/, loader: 'file-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader' }],
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Galery',
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
