const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/index'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR,
    new webpack.NoEmitOnErrorsPlugin()
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env','react','stage-0'],
              plugins: ['transform-runtime']
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },

  devtool: 'eval'
}