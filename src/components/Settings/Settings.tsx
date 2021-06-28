import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { history } from "../..";
import { IChangePassword } from "../../models/user";
import { RootStoreContext } from "../../Stores/rootStore";
import "./Settings.css";

const Settings = () => {
  const rootStore = useContext(RootStoreContext);
  const { changePassword } = rootStore.adminStore;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>();

  const onSubmit = (data: IChangePassword) => {
    changePassword(data)
      .then(() => {
        history.push("/dashboard");
        toast.success("Password changed successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="settings">
      <form className="password-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Old Password:</label>
        <div className="p-input">
          <input
            type="text"
            {...register("oldPassword", { required: "This is required" })}
          />
          {errors.oldPassword && (
            <p style={{ color: "red" }}>{errors.oldPassword.message}</p>
          )}
        </div>
        <label>New Password:</label>
        <div className="p-input">
          <input
            type="text"
            {...register("newPassword", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be a minimum of 6 characters",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                message:
                  "At least 1 uppercase, 1 lowercase, 1 digit and 1 special character is needed",
              },
            })}
          />
          {errors.newPassword && (
            <p style={{ color: "red" }}>{errors.newPassword.message}</p>
          )}
        </div>
        <div style={{ textAlign: "center" }}>
          <input
            type="submit"
            value="Update Password"
            style={{ padding: "10px 0", width: 200, height: 40, marginTop: 5 }}
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
