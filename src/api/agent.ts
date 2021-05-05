import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IUnit} from "../models/unit";
import IUser, { ICustomer, IUserLogin, IUserLoginWithOtp } from "../models/user";
import { createImageFormData, createUnitFormData } from "./formDataUtil";
import { history } from "../";
import { IImageUpload } from "../models/image";

axios.defaults.baseURL = "https://homeland.aveneur.com/api";
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
axios.interceptors.response.use(undefined, (error ) => {
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
  if(status === 401)
  {
    toast.error("You are not logged in please log in to perform this action");
  }
  if(status === 409 )
  {
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
  galleryPostform : (url:string,data : IImageUpload) =>{
    const formData = createImageFormData(data)
    console.log(formData)
    return axios.post(url,formData,{
      headers : {"Content-type":"multipart/form-data"}
    })
    .then(responseBody)
  }
};
const Admin = {
  imageUpload : (data : IImageUpload) => form.galleryPostform("/Adminstrator/Gallery",data),
  customerList : () : Promise<ICustomer[]> => requests.get("/Adminstrator/UserList")
}
const User = {
  login: (body: IUserLogin) => requests.post("/user/login", body),
  loginWithOtp: (body: IUserLoginWithOtp): Promise<IUser> =>
    requests.post("/user/loginWithOtp", body),
  currentUser: (): Promise<IUser> => requests.get("/user"),
};
const Units = {
  unitList: (): Promise<IUnit[]> => requests.get("/flat"),
  create: (body: IUnit) => form.unitPostForm("/flat", body),
  edit: (id: string, body: IUnit) => form.unitPutForm(`/flat/${id}`, body),
  details:(id : string) => requests.get(`/flat/${id}`),
  delete : (id : string) : Promise<IUnit> => requests.del(`/flat/${id}`)
};

export default { Units, User ,Admin};
