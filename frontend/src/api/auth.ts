import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const registerUser = async (email: string, password: string) => {
  return axios.post(`${API_URL}/register`, { email, password });
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response;
};
