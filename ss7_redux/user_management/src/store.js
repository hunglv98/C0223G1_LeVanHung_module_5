import { list } from "./reducer/UserReducer"
import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

// The store now has the ability to accept thunk functions in `dispatch`

const rootReducer = combineReducers({
    list: list
})

export const store = createStore(rootReducer, composedEnhancer);