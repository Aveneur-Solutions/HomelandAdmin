import { IAllotment } from "./allotment";
import IBooking from "./booking";
import ITransfer from "./transfers";

export interface IUserLogin {
  phoneNumber: string;
  password: string;
}

export interface IUserLoginWithOtp {
  phoneNumber: string;
  otp: string;
}

export default interface IUser {
  phoneNumber: string;
  token: string;
  fullname: string;
  role : string;
}
export interface ICustomer{
  phoneNumber: string;
  fullname: string;
  role : string;
  noOfFlatsBooked : number;
  noOfFlatsAlloted : number;
  address : string;
  nid : string;
}
export interface IUserRegister {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}
export interface ICustomerDetails{
  fullName: string,
  phoneNumber : string,
  address : string,
  nid : string,
  bookings : IBooking[],
  allotments : IAllotment[],
  transfers : ITransfer[]
}
