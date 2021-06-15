import {
    USER_START,
    USER_ERROR,
    SET_USER
} from "./types";

const initialState = {
    loading: false,
    user: null,
    error: null
}

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case USER_START:
            return {
                ...state,
                loading: true,
            }

        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case SET_USER:
            return {
                ...state,
                loading: false,
                error: null,
                user: payload
            }

        default:
            return state
    }

}


export default reducer;