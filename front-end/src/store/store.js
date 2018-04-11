// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import {createStore} from 'redux'
// import rootReducer from '../reducer/index'
import {user} from '../redux/user.redux'

const store = createStore(
    // rootReducer,
    user
    // 传入thunk中间件，实现异步
    // compose(
    //     applyMiddleware(thunk),
    //     window.devToolsExtension ? window.devToolsExtension() : f => f
    // )
)

export default store