import userReducer, { initialState } from "./reducer";
import {
    BOOKING_START,
    BOOKING_ERROR,
    SET_BOOKINGS
} from './types';


describe("bookingReducer tests", () => {

    it("should render the inital state", () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })


    it("should changes the loading user state to true", () => {
        expect(userReducer(initialState, {
            type: BOOKING_START,
        })).toEqual({
            ...initialState,
            loading: true
        })
    })


    it("should handle the BOOKING_ERROR action", () => {

        let errorMessage = "errorMessage";

        expect(userReducer(initialState, {
            type: BOOKING_ERROR,
            payload: errorMessage
        })).toEqual({
            ...initialState,
            loading: false,
            error: errorMessage
        })
    })



    it("should handle the SET_BOOKINGS and save the bookings", () => {

        let bookings = [
            {
                name: "booking 1"
            },
            {
                name: "booking 2"
            }
        ]

        expect(userReducer(initialState, {
            type: SET_BOOKINGS,
            payload: bookings
        })).toEqual({
            ...initialState,
            loading: false,
            error: null,
            bookings: bookings
        })
    })

})