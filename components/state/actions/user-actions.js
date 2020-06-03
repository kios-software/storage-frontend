import { FETCH_USER_PENDING, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../constants'

export function fetchUserPending() {
    return {
        "type": FETCH_USER_PENDING
    }
}

export function fetchUserSuccess(user) {
    return {
        "type": FETCH_USER_SUCCESS,
        "user": user
    }
}

export function fetchUserFailure(error) {
    return {
        "type": FETCH_USER_FAILURE,
        "error": error
    }
}