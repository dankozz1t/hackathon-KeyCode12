import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://nameURL/api',
});

export const token = {
  set(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = null;
  },
};
