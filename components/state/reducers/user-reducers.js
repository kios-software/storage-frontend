import { FETCH_USER_PENDING, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../constants"

const initialState = { 
    "pending": false,
    "user": {},
    "error": null
}

export default function user(state = initialState, action){ 
    switch(action.type) {
        case FETCH_USER_PENDING:
            return {
                ...state,
                "pending": true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                "pending": false,
                "user": action.user
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                "pending": false,
                "error": action.error
            }
        default:
            return state
    }
}

// Selectors are to get a defined part of the state, they're useful as the app scales
export const getUser = state => state.user.user
export const getUserPending = state => state.user.pending
export const getUserError = state => state.user.error