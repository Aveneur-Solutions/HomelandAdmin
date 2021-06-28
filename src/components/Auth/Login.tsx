import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IUserLogin } from "../../models/user";
import { RootStoreContext } from "../../Stores/rootStore";
import OtpAuth from "./OtpAuth";
import "./auth.css";
import { history } from "../..";
import LoginForm from "./LoginForm";

const Login = () => {
  const rootStore = useContext(RootStoreContext);
  const { login, loginWithOtp, user } = rootStore.userStore;
  const { token } = rootStore.commonStore;
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState(false);

  useEffect(() => {
    if (token && user) {
      history.push("/dashboard");
      // if (location.state) {
      //   history.push(location.state.from);
      // } else history.push("/dashboard");
    }
  }, [token, user]);

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
      {!otp ? (
        <LoginForm
          onSubmit={handleSubmit(onLogin)}
          register={register}
          errors={errors}
        />
      ) : (
        <OtpAuth phoneNo={phoneNo} func={loginWithOtp} buttonText="Login" />
      )}
    </div>
  );
};

export default observer(Login);
