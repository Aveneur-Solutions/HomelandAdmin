import axios, { AxiosResponse } from "axios";
import { IUnit } from "../models/unit";
import IUser, {
  IUserLogin,
  IUserLoginWithOtp,
  IUserRegister,
} from "../models/user";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const User = {
  login: (body: IUserLogin) => requests.post("/user/login", body),
  loginWithOtp: (body: IUserLoginWithOtp): Promise<IUser> =>
    requests.post("/user/loginWithOtp", body),
  currentUser: (): Promise<IUser> => requests.get("/user"),
};

const Units = {
  unitList: (): Promise<IUnit[]> => requests.get("/flat"),
  create: (body: IUnit) => requests.post("/flat", body),
  edit: (id: string, body: IUnit) => requests.put(`/flat/${id}`, body),
};

export default { Units, User };
