import {createStore, applyMiddleware, Middleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/RootReducer'

const middlewares : Middleware[] = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store