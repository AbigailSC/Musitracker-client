import axios from 'axios';

const apikey = import.meta.env.VITE_APP_API_KEY as string;

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = apikey;

export default axiosInstance;
