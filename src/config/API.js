import axios from 'axios'
import API_URL from './API_URL';

const API = axios.create({
    baseURL: API_URL,
});

API.defaults.headers.common['Accept'] = "application/json";

export default API;