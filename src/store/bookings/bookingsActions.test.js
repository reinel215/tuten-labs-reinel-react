import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as bookingActions from './actions';
import * as bookingService from '../../services/booking';
import { bookingInitialState } from '../user/reducer';

import {
    BOOKING_START,
    BOOKING_ERROR,
    SET_BOOKINGS
} from './types';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("test over the bookings actions", () => {


    it("should create an action to get bookings", () => {

        bookingService.getBookings = jest.fn(value => value)

        let userInfo = {
            email: "email@prueba.com",
            adminEmail: "admin@prueba.com",
            current: true
        }

        const expectedActions = [
            { type: BOOKING_START },
            { type: SET_BOOKINGS, payload: userInfo },
        ]

        const store = mockStore({ user: bookingInitialState })

        return store.dispatch(bookingActions.getBookings(userInfo))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    })


    it("should create an error action on get bookings", () => {

        let errorMessage = "something went wrong";

        bookingService.getBookings = jest.fn(value => { throw new Error(errorMessage) })

        let userInfo = {
            email: "email@prueba.com",
            adminEmail: "admin@prueba.com",
            current: true
        }

        const expectedActions = [
            { type: BOOKING_START },
            { type: BOOKING_ERROR, payload: errorMessage },
        ]

        const store = mockStore({ user: bookingInitialState })
        const mockCallback = jest.fn()

        return store.dispatch(bookingActions.getBookings(userInfo, mockCallback))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                expect(mockCallback).toHaveBeenCalledTimes(0);
            })
    })

})