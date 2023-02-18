import axios from 'axios';

const aleApiNT = axios.create({
    baseURL: 'https://api.alejandria.edu.mx/api-ale/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});


export default aleApiNT;