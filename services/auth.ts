import { api } from "@/config/api.config";

type RegisterFormData = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  r_password: string;
};

export const login = async (formdata: { email: string; password: string }) => {
  const response = await api.post(`/auth/signin`, formdata);
  return response;
};

export const register = async (formdata: RegisterFormData) => {
  const response = await api.post(`/auth/signup`, formdata);
  return response;
};

export const forgotPassword = async (email: string) => {
  const response = await api.post(`/auth/forgot-password`, { email });
  return response;
};

// may send a token & mail
export const resetPassword = async () => {
  const response = await api.post(`/auth/reset-password`);
  return response;
};
