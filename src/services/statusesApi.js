import { axiosInstance } from './http';

const getStatuses = async () => {
  const { data } = await axiosInstance.get('/statuses');
  return data;
};

export const statusesApi = {
  getStatuses,
};
