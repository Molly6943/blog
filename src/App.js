import React from 'react'
import { Provider } from 'react-redux'
import { Link, HashRouter as Router } from 'react-router-dom'
import routes from './routes'
import * as Actions from './store/actions'

// connect方法生成容器组件之后，需要让容器组件拿到state对象，才能生成UI组件的参数
// provider组件可以让容器拿到state
const App = ({ store }) =>
    <Provider store = { store }>
      <Router children = { routes } />
    </Provider>

export default App
