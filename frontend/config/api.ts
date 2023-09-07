import axios from 'axios';
import { env } from 'process';

const {NEXT_PUBLIC_BACK_API} = env;

const apiHome = axios.create({
  baseURL: NEXT_PUBLIC_BACK_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export {apiHome};