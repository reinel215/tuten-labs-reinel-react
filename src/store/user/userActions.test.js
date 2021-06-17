import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as userActions from './actions';
import * as authServices from '../../services/auth';
import { userInitialState } from '../user/reducer';

import {
    USER_START,
    USER_ERROR,
    SET_USER
} from './types';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("test over the user actions", () => {



    it("should create an action to login the user", () => {

        authServices.login = jest.fn(value => value)

        let credential = {
            email: "email@prueba.com",
            password: "1234"
        }

        const expectedActions = [
            { type: USER_START },
            { type: SET_USER, payload: credential },
        ]

        const store = mockStore({ user: userInitialState })
        const mockCallback = jest.fn()

        return store.dispatch(userActions.login(credential, mockCallback))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                expect(mockCallback).toHaveBeenCalled();
            })
    })


    it("should create an error action", () => {

        let errorMessage = "something went wrong";

        authServices.login = jest.fn(value => { throw new Error(errorMessage) })

        let credential = {
            email: "email@prueba.com",
            password: "1234"
        }

        const expectedActions = [
            { type: USER_START },
            { type: USER_ERROR, payload: errorMessage },
        ]

        const store = mockStore({ user: userInitialState })
        const mockCallback = jest.fn()

        return store.dispatch(userActions.login(credential, mockCallback))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                expect(mockCallback).toHaveBeenCalledTimes(0);
            })
    })

})