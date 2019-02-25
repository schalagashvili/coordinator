import { LOGIN_USER_STARTED, LOGIN_USER_SECCEEDED, LOGIN_USER_FAILED } from '../actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_STARTED:
      return {
        loading: true,
        errors: {},
        data: {}
      }
    case LOGIN_USER_SECCEEDED:
      return {
        loading: false,
        errors: {},
        data: action.payload
      }
    case LOGIN_USER_FAILED:
      return {
        loading: false,
        errors: action.payload,
        data: {}
      }
  }
  return state
}
