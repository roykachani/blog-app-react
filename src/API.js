import axios from 'axios';

export const API = axios.create({
	baseURL: 'https://api.blogblox.com.ar/api/',
});
