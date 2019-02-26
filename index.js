import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import * as rootReducers from './src/reducers'

const rootReducer = combineReducers({
  ...rootReducers
})
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore)
const store = createStoreWithMiddleware(rootReducer, applyMiddleware(thunk, apiMiddleware))

export default store
