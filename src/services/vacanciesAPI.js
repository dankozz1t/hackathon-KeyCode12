import { axiosInstance } from './http';

const getVacancies = async () => {
  const { data } = await axiosInstance.get('/vacancies');
  return data;
};

const createVacancy = async vacancy => {
  const { data } = await axiosInstance.post('/vacancy', vacancy);
  return data;
};

export const vacanciesAPI = {
  getVacancies,
  createVacancy,
};
