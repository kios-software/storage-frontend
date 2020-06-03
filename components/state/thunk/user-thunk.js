import { fetchUserFailure, fetchUserPending, fetchUserSuccess } from '../actions/user-actions'
import fetch from 'unfetch'

function fetchUser() {
    return dispatch => {
        console.log("The function has been called")
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

    // return dispatch => {
    //     dispatch(fetchProductsPending());
    //     fetch('https://exampleapi.com/products')
    //     .then(res => res.json())
    //     .then(res => {
    //         if(res.error) {
    //             throw(res.error);
    //         }
    //         dispatch(fetchProductsSuccess(res.products);
    //         return res.products;
    //     })
    //     .catch(error => {
    //         dispatch(fetchProductsError(error));
    //     })
    // }
}

export default fetchUser