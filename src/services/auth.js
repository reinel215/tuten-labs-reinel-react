import API from '../config/API';


export const login = async  ({ email, app, password }) => {
    const response = await API.put("/user/{email}");
    return response.data;
}