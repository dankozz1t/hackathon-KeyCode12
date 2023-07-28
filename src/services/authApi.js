import { axiosInstance } from './http';

const registerUser = async payload => {
  const { data } = await axiosInstance.post('/users/register', payload);
  return data;
};

const loginUser = async payload => {
  const { data } = await axiosInstance.post('/users/login', payload);
  return data;
};

const logoutUser = async () => {
  await axiosInstance.post(`/users/logout`);
};

export const authAPI = {
  registerUser,
  loginUser,
  logoutUser,
};
