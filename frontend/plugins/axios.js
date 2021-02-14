import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:5000';
//TODO: USE ENV_VAR
export const $axios = axios.create({
    baseURL: API_URL
})
