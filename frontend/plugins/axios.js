import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
console.log("api", process.env.NEXT_PUBLIC_API_URL)
//TODO: USE ENV_VAR
export const $axios = axios.create({
    baseURL: API_URL
})
