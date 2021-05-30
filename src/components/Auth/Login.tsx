import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IUserLogin } from "../../models/user";
import { RootStoreContext } from "../../Stores/rootStore";
import OtpAuth from "./OtpAuth";
import "./auth.css";
import { history } from "../..";

const Login = () => {
  const rootStore = useContext(RootStoreContext);
  const { login, loginWithOtp } = rootStore.userStore;
  const {token} = rootStore.commonStore;
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState(false);
  const [passwordFieldVisibility, setPasswordFieldVisibility] = useState(true);
  useEffect(() => {
    if (token) {
      history.push("/dashboard")
    }   
  }, [token]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();

  const onLogin = (data: IUserLogin) => {
    setPhoneNo(data.phoneNumber);
    login(data)
      .then(() => setOtp(true))
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onLogin)}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <br />
        <input
          id="phoneNumber"
          type="text"
          placeholder="PHONE"
          defaultValue="+880"
          {...register("phoneNumber", { required: "Phone number is required" })}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type={passwordFieldVisibility ? "password" : "text"}
          {...register("password", { required: "Password is required" })}
        />
        <input
          id="show"
          type="button"
          onClick={() => setPasswordFieldVisibility(!passwordFieldVisibility)}
          value={passwordFieldVisibility ? "Show" : "Hide"}
        />

        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <div className="submitbtn">
          <input type="submit" value="Submit" />
        </div>
      </form>
      {otp && (
        <OtpAuth phoneNo={phoneNo} func={loginWithOtp} buttonText="Login" />
      )}
    </div>
  );
};

export default observer(Login);
