import axios, { USER_DATA } from "../../services/axios";

const register = (data) => {
  return axios.post("/signup", data);
};

const logout = () => {
  localStorage.removeItem(USER_DATA);
};

const AuthService = { register, logout };

export default AuthService;
