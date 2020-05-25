import {createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import rootReducer from './state/reducers/index'

// create a makeStore function
const makeStore = context => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});