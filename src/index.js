import 'react-hot-loader/patch'
import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './library'

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./library', () => {
    const nextApp = require('./library').default
    render(nextApp)
  })
}