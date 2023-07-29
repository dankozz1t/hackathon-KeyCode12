import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://hackathon-keycode12.onrender.com/api',
});

export const token = {
  set(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = null;
  },
};
