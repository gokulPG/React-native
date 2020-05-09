import {createStore, applyMiddleware, Middleware, Store} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/RootReducer'

const middlewares : Middleware[] = [thunk]
const store : Store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store