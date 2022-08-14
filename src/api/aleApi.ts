import axios from 'axios';

let token;
if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
}

const aleApi = axios.create({
    baseURL: 'http://api.alejandria.edu.mx:3005/api-ale/v1',
    headers: {
        'Content-Type': 'application/json',
        'x-token': token ? token : ''
    }
});


export default aleApi;