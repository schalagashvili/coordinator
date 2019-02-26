import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { logout } from './logout';
import * as types from '../actionTypes'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('logout', () => {
    it('should dispatch LOG_OUT_USER when it is called', () => {
        const expectedActions = [
            { type: types.LOG_OUT_USER, payload: { data: {} } }
        ]

        const store = mockStore({})

        return store.dispatch(logout()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});

