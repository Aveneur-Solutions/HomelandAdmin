import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IUnit } from "../models/unit";
import IUser, {
  IChangePassword,
  ICustomer,
  ICustomerDetails,
  IUserLogin,
  IUserLoginWithOtp,
} from "../models/user";
import { history } from "../";
import { IImage, IImageUpload } from "../models/image";
import {
  createImageFormData,
  createUnitFormData,
} from "../helper/formDataUtil";
import IBooking from "../models/booking";
import ITransfer from "../models/transfers";
import { IStats } from "../models/stats";
import { IAllotment, IAllotmentRequest } from "../models/allotment";

axios.defaults.baseURL = "https://homeland.aveneur.com/api";
// axios.defaults.baseURL = "https://localhost:5001/api";

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

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error -- make sure API server is running");
    console.log(error);
  }
  const { status, data, config } = error.response;
  if (status === 404) {
    history.push("/notFoundeekdom");
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    history.push("/notFound");
  }
  if (status === 500) {
    toast.error("Server Error Check the terminal for more info");
  }
  if (status === 401) {
    toast.error(data.errors.error);
  }
  if (status === 409) {
    console.log(data);
  }
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const form = {
  unitPostForm: (url: string, data: IUnit) => {
    const formData = createUnitFormData(data);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
  unitPutForm: (url: string, data: IUnit) => {
    const formData = createUnitFormData(data);
    return axios
      .put(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
  galleryPostform: (url: string, data: IImageUpload) => {
    const formData = createImageFormData(data);
    console.log(formData);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
};

const Admin = {
  imageUpload: (data: IImageUpload) =>
    form.galleryPostform("/Adminstrator/Gallery", data),
  customerList: (): Promise<ICustomer[]> =>
    requests.get("/Adminstrator/UserList"),
  getAllImages: (): Promise<IImage[]> => requests.get("/Adminstrator/Images"),
  getImage: (id: string): Promise<IImage> =>
    requests.get(`/Adminstrator/Images/${id}`),
  deleteImage: (id: string) => requests.del(`/Adminstrator/Images/${id}`),
  getStat: (): Promise<IStats> => requests.get("/Adminstrator/stats"),
  customerDetails: (body: string): Promise<ICustomerDetails> =>
    requests.get(`/Adminstrator/customerDetails/${body}`),
};

const User = {
  login: (body: IUserLogin) => requests.post("/user/login", body),
  loginWithOtp: (body: IUserLoginWithOtp): Promise<IUser> =>
    requests.post("/user/loginWithOtp", body),
  currentUser: (): Promise<IUser> => requests.get("/user"),
  changePassword: (body: IChangePassword) =>
    requests.post("/user/changePassword", body),
};

const Units = {
  unitList: (): Promise<IUnit[]> => requests.get("/flat"),
  create: (body: IUnit) => form.unitPostForm("/flat", body),
  edit: (id: string, body: IUnit) => form.unitPutForm(`/flat/${id}`, body),
  details: (id: string) => requests.get(`/flat/${id}`),
  delete: (id: string): Promise<IUnit> => requests.del(`/flat/${id}`),
  getAllBookings: (): Promise<IBooking[]> => requests.get("/flat/AllBookings"),
  getAllTransfers: (): Promise<ITransfer[]> =>
    requests.get("/flat/AllTransfers"),
  createAllotment: (body: IAllotmentRequest) =>
    requests.post("/Flat/createAllotment", body),
  getAllotments: (): Promise<IAllotment[]> => requests.get("/flat/allAllotments"),
};

const agent = { Units, User, Admin };

export default agent;
