import { LOGIN_USER_STARTED, LOGIN_USER_SECCEEDED, LOGIN_USER_FAILED } from '../actionTypes'

import { RSAA } from 'redux-api-middleware'

export function login() {
  return async function(dispatch) {
    await dispatch({
      [RSAA]: {
        host: 'http://www.mocky.io',
        path: '/v2/5c74e5752f0000a145964317',
        types: [LOGIN_USER_STARTED, LOGIN_USER_SECCEEDED, LOGIN_USER_FAILED],
        method: 'GET'
      }
    })
  }
}
