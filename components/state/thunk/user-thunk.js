import { fetchUserFailure, fetchUserPending, fetchUserSuccess } from '../actions/user-actions'
import fetch from 'unfetch'

function fetchUser() {
    return dispatch => {
        dispatch(fetchUserPending())
        fetch('/api/placeholderUser')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchUserSuccess(res))
            return res;
        })
        .catch(error => {
            dispatch(fetchUserFailure(error))
        })
    }
}

function registerUser() {

}

export default fetchUser