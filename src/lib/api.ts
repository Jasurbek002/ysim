import axios, { AxiosInstance } from "axios";
import { API_NOTIFY, API_REGISTER } from "../config";

const apiRegister: AxiosInstance = axios.create({
  baseURL: API_REGISTER,
});

const apiNotfiy: AxiosInstance = axios.create({
  baseURL: API_NOTIFY,
});

export { apiNotfiy, apiRegister };
