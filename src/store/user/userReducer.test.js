import userReducer, { initialState } from "./reducer";
import {
    USER_START,
    USER_ERROR,
    SET_USER
} from './types';


describe("User reducer Test", () => {

    it("should render the inital state", () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })


    it("should changes the loading state to true", () => {
        expect(userReducer(initialState, {
            type: USER_START,
        })).toEqual({
            ...initialState,
            loading: true
        })
    })


    it("should handle USER_ERROR action", () => {

        let errorMessage = "errorMessage";

        expect(userReducer(initialState, {
            type: USER_ERROR,
            payload: errorMessage
        })).toEqual({
            ...initialState,
            loading: false,
            error: errorMessage
        })
    })



    it("should handle SET_USER action", () => {

        let user = {
            name : "user example"
        };

        expect(userReducer(initialState, {
            type: SET_USER,
            payload: user
        })).toEqual({
            ...initialState,
            loading: false,
            error: null,
            user: user
        })
    })

})