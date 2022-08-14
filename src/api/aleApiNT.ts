import axios from 'axios';

const aleApiNT = axios.create({
    baseURL: 'http://api.alejandria.edu.mx:3005/api-ale/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});


export default aleApiNT;