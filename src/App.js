import React from 'react'
import { Provider } from 'react-redux'
import { Link, HashRouter as Router } from 'react-router-dom'
import routes from './routes'
import * as Actions from './store/actions'

const App = ({ store }) =>
    <Provider store = { store }>
      <Router children = { routes } />
    </Provider>

export default App
