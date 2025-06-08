import api from "../config/api";

type User = {
  email: string;
  password: string;
  name?: string;
};


export const RegisterService = async (body: User) => {
  try {
    const response = await api.post(`/auth/register`, {nome: body.name, email: body.email, password: body.password});
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const LoginService = async (body: User) => {
  try {
    const response = await api.post(`/auth/login`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
};