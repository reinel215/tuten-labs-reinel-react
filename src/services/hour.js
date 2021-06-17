import axios from 'axios';


export const convertHour = async (hour) => {

    const response = await axios.post("https://gentle-spire-16293.herokuapp.com/time", hour);
    return response.data;

}