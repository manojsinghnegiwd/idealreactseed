import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import messageReducer from './reducers/message'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  messageReducer,
  routing: routerReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;