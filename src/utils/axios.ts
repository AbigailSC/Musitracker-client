import axios from 'axios';

// Apikey del back deployado en railway

// const apikey = import.meta.env.VITE_APP_API_KEY as string;

// Apikey del back local

const apikeyLocal = import.meta.env.VITE_APP_LOCAL_API_KEY as string;

const axiosInstance = axios.create();

// Change here to use local or deploy and comment the other

axiosInstance.defaults.baseURL = apikeyLocal;

export default axiosInstance;
