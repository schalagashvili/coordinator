import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { login } from './login';
import * as types from '../actionTypes'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('login', () => {
    afterEach(() => {
        fetchMock.restore()
      })

    it('should dispatch LOG_IN_SUCCEEDED when it is called', () => {
        const body = {
            username: '123456789',
            password: 'qwerty12'
        }

        fetchMock.postOnce(`http://www.mocky.io/v2/5c74e5752f0000a145964317`,
            { body: body, headers: { 'content-type': 'application/json' } })

        const expectedActions = [
            { type: types.LOG_IN_STARTED },
            { type: types.LOG_IN_SUCCEEDED, payload: { token: expect.any(String) } }
        ]

        const store = mockStore({ })

        return store.dispatch(login(body)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});

