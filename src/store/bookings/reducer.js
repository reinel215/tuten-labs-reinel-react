import {
    BOOKING_START,
    BOOKING_ERROR,
    SET_BOOKINGS
} from "./types";

export const initialState = {
    loading: false,
    bookings: null,
    error: null
}

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case BOOKING_START:
            return {
                ...state,
                loading: true,
            }

        case BOOKING_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case SET_BOOKINGS:
            return {
                ...state,
                loading: false,
                error: null,
                bookings: payload
            }

        default:
            return state
    }

}


export default reducer;