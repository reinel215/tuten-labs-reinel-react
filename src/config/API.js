import axios from 'axios'
import API_URL from './API_URL';
import jsCookie from 'js-cookie';
import cookie from '../config/COOKIE_NAME';

const API = axios.create({
    baseURL: API_URL,
});

const user = jsCookie.getJSON(cookie);

API.defaults.headers.common['Accept'] = "application/json";
API.defaults.headers.common['Token'] = user?.sessionTokenBck;


export default API;