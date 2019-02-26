import { LOGOUT_USER} from '../actionTypes'


export default (state = {}, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return {
        loading: false,
        errors: {},
        data: {}
      }
  }
  return state
}
