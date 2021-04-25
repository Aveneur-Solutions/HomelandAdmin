import axios, { AxiosResponse } from "axios";
import { IUnit } from "../models/unit";
import IUser, { IUserLogin, IUserLoginWithOtp } from "../models/user";
import { createUnitFormData } from "./formDataUtil";

axios.defaults.baseURL = "http://homeland.aveneur.com/api";
// axios.defaults.baseURL = "http://localhost:5000/api";

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

const unitForm = {
  postForm: (url: string, data: IUnit) => {
    const formData = createUnitFormData(data);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
  putForm: (url: string, data: IUnit) => {
    const formData = createUnitFormData(data);
    return axios
      .put(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
};

const Units = {
  unitList: (): Promise<IUnit[]> => requests.get("/flat"),
  create: (body: IUnit) => unitForm.postForm("/flat", body),
  edit: (id: string, body: IUnit) => unitForm.putForm(`/flat/${id}`, body),
  details:(id : string) => requests.get(`/flat/${id}`),
  delete : (id : string) => requests.del(`/flat/${id}`)
};

export default { Units, User };
