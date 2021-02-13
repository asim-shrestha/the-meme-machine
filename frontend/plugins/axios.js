import axios from 'axios';

//TODO: USE ENV_VAR
export const $axios = axios.create({
    baseURL: 'http://localhost:5000'
})
