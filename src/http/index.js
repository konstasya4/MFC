import axios from 'axios';
// import {AuthResponse} from "../models/response/AuthResponse";
import {store} from "../redux/stores";
// import {IUser} from "../models/IUser";

export const API_URL = `http://localhost:8080/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// })

// $api.interceptors.response.use((config) => {
//     return config;
// },async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status == 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
//             localStorage.setItem('token', response.data.accessToken);
//             return $api.request(originalRequest);
//         } catch (e) {
//             console.log('НЕ АВТОРИЗОВАН')
//         }
//     }
//     throw error;
// })

export default $api;
// import axios from 'axios';
// // import { API_URL } from './config'; // Assuming API_URL is defined in a separate config file

// export const API_URL = `http://localhost:8080/api`
// axios.defaults.withCredentials = true;
// const $api = axios.create({
//   withCredentials: true,
//   baseURL: API_URL
// });

// $api.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// $api.interceptors.response.use(
//   (response) => response, // Return response directly
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response && error.response.status === 401 && !originalRequest._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
//         localStorage.setItem('token', response.data.accessToken);
//         originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
//         return axios(originalRequest); // Retry original request
//       } catch (e) {
//         console.log('НЕ АВТОРИЗОВАН:', e);
//       }
//     }
//     throw error; // Throw error after handling
//   }
// );

// export default $api;
