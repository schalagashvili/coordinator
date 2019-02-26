import { LOGOUT_USER } from '../actionTypes'


export function logout() {
    return function (dispatch) {
        dispatch({
            type: LOGOUT_USER
        })
    }
}
