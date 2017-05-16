import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { AppContainer } from 'react-hot-loader';
import App from './App';
import AppStore from './store'
import { addArticle, deleteArticle, editArticle, addComment } from './store/actions'

const persistedState = { articles: [] }
const store = createStore(AppStore, persistedState, applyMiddleware(thunkMiddleware))

// window.defaultStore = store

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
