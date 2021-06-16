import {
    BOOKING_START,
    BOOKING_ERROR,
    SET_BOOKINGS
} from './types';


//services
import * as bookingService from '../../services/booking'; 



export const getBookings = (userInfo) => {

    return async dispatch => {
        try {
            
            dispatch({ type: BOOKING_START });
            const bookings = await bookingService.getBookings(userInfo);
            dispatch({ type: SET_BOOKINGS, payload: bookings })

        } catch (error) {
            dispatch({ type: BOOKING_ERROR, payload : error.message })
        }
    }

}