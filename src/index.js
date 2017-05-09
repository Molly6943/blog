import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { AppContainer } from 'react-hot-loader';
// import { $db } from './util'
import App from './App';
import AppStore from './store'
import { addArticle, deleteArticle, editArticle, addComment } from './store/actions'

const thunk = thunkMiddleware()
// const persistedState = $db.get('reduxState') || { articles: [] }
const persistedState = { articles: [] }
const store = createStore(AppStore, persistedState, applyMiddleware(thunk))
// store.subscribe(() => { $db.set('reduxState', store.getState()) })
store.dispatch(addArticle('reactjs'))
store.dispatch(deleteArticle('reactjs'))
store.dispatch(editArticle('reactjs'))
store.dispatch(addComment('reactjs'))

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
