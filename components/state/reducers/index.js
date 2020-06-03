import { combineReducers } from "redux";
import foo from './foo-reducers'
import auth from './auth-reducers'
import user from './user-reducers'

export default combineReducers({
    foo,
    auth,
    user
})