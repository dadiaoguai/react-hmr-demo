const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const path = require('path')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {
    colors: true
  }
}))
app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static('dist'))

app.get('/', (req ,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})