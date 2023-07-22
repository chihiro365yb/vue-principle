import axios from 'axios';

const request = axios.create({
    baseURL: 'localhost: 8080',
    timeout: 5000,
});

export default request;
