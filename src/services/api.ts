import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney-felipebrenner.netlify.app/api',
})