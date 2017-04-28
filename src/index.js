import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader';
import { $db } from './util'
import App from './App';
import AppStore from './store'

const persistedState = $db.get('reduxState') || []
const store = createStore(AppStore, persistedState)
store.subscribe(() => { $db.set('reduxState', store.getState()) })
const render = (App) => {
  ReactDOM.render(
    <AppContainer>
    <App store={ store }/>
    </AppContainer>,
    document.getElementById('root')
  )
}
render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
