import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IUserLogin } from "../../models/user";
import { RootStoreContext } from "../../Stores/rootStore";
import OtpAuth from "./OtpAuth";

const Login = () => {
  const rootStore = useContext(RootStoreContext);
  const { login, loginWithOtp } = rootStore.userStore;

  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();

  const onLogin = (data: IUserLogin) => {
    setPhoneNo(data.phoneNumber);
    login(data).then(() => setOtp(true));
  };

  return (
    <div>
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
          type="text"
          placeholder="ENTER PASSWORD"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <input type="submit" value="Submit" />
      </form>
      {otp && (
        <OtpAuth phoneNo={phoneNo} func={loginWithOtp} buttonText="Login" />
      )}
    </div>
  );
};

export default Login;
