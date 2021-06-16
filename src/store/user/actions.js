import {
    USER_START,
    USER_ERROR,
    SET_USER
} from './types';


//services
import * as authService from '../../services/auth' 



export const login = (credentials, callback = () => {}) => {

    return async dispatch => {
        try {
            
            dispatch({ type: USER_START });
            const user = await authService.login(credentials);
            dispatch({ type: SET_USER, payload: user })
            callback();

        } catch (error) {
            dispatch({ type: USER_ERROR, payload : error.message })
        }
    }

}