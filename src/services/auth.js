import API from '../config/API';


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

    return response.data;
}