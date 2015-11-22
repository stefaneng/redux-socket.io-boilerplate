import makeStore from './server/store'
import startServer from './server/server'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'
import morgan from 'morgan'

export const store = makeStore()

startServer(store)

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT
const host = process.env.HOSTNAME ?  process.env.HOSTNAME : '0.0.0.0'
const app = express()

app.use(morgan('combined'))

if (!isDeveloping) {
  app.use(express.static(__dirname + '/dist'))
}

if (isDeveloping) {
  const compiler = webpack(config)

  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }))

  app.use(webpackHotMiddleware(compiler))
}

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(port, host, function onStart(err) {
  if (err) {
    throw(err)
  }
})
