import { SET_AUTHENTICATED } from "../constants"

const initialState = { 
    "authenticated": false
}

export default function auth(state = initialState, action){ 
    switch(action.type) {
        case SET_AUTHENTICATED:
            return Object.assign({}, state, {
                "authenticated": true,
            })
        default:
            return state
    }
}