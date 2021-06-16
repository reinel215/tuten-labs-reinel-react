import API from '../config/API';
import cookie from '../config/COOKIE_NAME';
import jsCookie from 'js-cookie';



export const login = async  ({ email, password }) => {
    const app = "APP_BCK";
    const response = await API.put(`/user/${email}`,
    {},
    { 
        headers: {
            App: app,
            Password: password
        }
    } 
    );

    API.defaults.headers.common['Token'] = response.data.sessionTokenBck;

    jsCookie.set(cookie, response.data);
    return response.data;
}