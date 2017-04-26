import { combineReducers } from 'redux'
import articles from './states'

const AppStore = combineReducers({ articles })

export default AppStore
