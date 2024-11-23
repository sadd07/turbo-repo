// apis/userApi.ts
import axios from 'axios';
import { User } from './user';

const BASE_URL = 'http://localhost:5000';
const tokenBearer = "8mtoYtmP7SrbZdxTOcPVDicepXLjoz1ZuHRp04VI0IG1RUUEJERF7euiS5fd2kkM";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${BASE_URL}/fetch-user-data`, {
    headers: { 
      Authorization: `Bearer ${tokenBearer}`, 
      'Content-Type': 'application/json'
    },
  });
  return response.data.map((item: any) => ({
    id: item.id,
    name: item.data.name,
    age: item.data.age,
    email: item.data.email,
  }));
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await axios.get(`${BASE_URL}/fetch-user-data/${id}`, {
    headers: { Authorization: `Bearer ${tokenBearer}`, },
  });

  const a = {
    id: id,
    name: response.data.name,
    age: response.data.age,
    email: response.data.email,
  };
console.log(a);
  return a;
};

export const addUser = async (user: User): Promise<void> => {
  await axios.post(`${BASE_URL}/update-user-data`, user, {
    headers: { Authorization: `Bearer ${tokenBearer}`, },
  });
};
