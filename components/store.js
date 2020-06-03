import {applyMiddleware, createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import rootReducer from './state/reducers/index'
import thunk from 'redux-thunk'

const middlewares = [thunk]

// create a makeStore function
const makeStore = context => createStore(rootReducer, applyMiddleware(...middlewares));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});