import React, { FormEventHandler, useState } from "react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { IUserLogin } from "../../models/user";

interface IProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<IUserLogin>;
  errors: DeepMap<IUserLogin, FieldError>;
}

const LoginForm: React.FC<IProps> = ({ onSubmit, register, errors }) => {
  const [passwordFieldVisibility, setPasswordFieldVisibility] = useState(true);

  return (
    <form onSubmit={onSubmit}>
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
  );
};

export default LoginForm;
