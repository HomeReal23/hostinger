import axios from 'axios';
const baseURL = process.env.API_HOST!;

const apiHome = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


export {apiHome};