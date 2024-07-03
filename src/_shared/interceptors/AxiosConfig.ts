import axios from 'axios';
import { startLoading, stopLoading } from './../utils/LoadingUtils';

const apiUrl = import.meta.env.VITE_API_URL;

const AxiosConfig = axios.create({
  baseURL: apiUrl,
});

AxiosConfig.interceptors.request.use(
  config => {
    startLoading();
    return config;
  },
  error => {
    stopLoading(); 
    return Promise.reject(error);
  }
);

AxiosConfig.interceptors.response.use(
  response => {
    stopLoading(); 
    return response;
  },
  error => {
    stopLoading(); 
    return Promise.reject(error);
  }
);

export default AxiosConfig;
