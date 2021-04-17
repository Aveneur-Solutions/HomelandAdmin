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
}

export interface IUserRegister {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}
