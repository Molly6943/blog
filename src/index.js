import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { AppContainer } from 'react-hot-loader';
// import { $db } from './util'
import App from './App';
import AppStore from './store'
import { addArticle, deleteArticle, editArticle, addComment } from './store/actions'

// const persistedState = $db.get('reduxState') || { articles: [] }
const persistedState = { articles: [] }
const store = createStore(AppStore, persistedState, applyMiddleware(thunkMiddleware))
// store.subscribe(() => { $db.set('reduxState', store.getState()) })

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
