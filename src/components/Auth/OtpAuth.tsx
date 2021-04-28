import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IUserLoginWithOtp } from "../../models/user";
import { RootStoreContext } from "../../Stores/rootStore";

interface IProps {
  phoneNo: string;
  func: (body: IUserLoginWithOtp) => Promise<void>;
  buttonText: string;
}

const OtpAuth: React.FC<IProps> = ({ phoneNo, func, buttonText }) => {
  const rootStore = useContext(RootStoreContext);
  const { user } = rootStore.userStore;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginWithOtp>();

  const onSubmit = (data: IUserLoginWithOtp) => {
    func(data).catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        hidden
        {...register("phoneNumber", { required: true })}
        value={phoneNo}
      />
      <input
        type="text"
        {...register("otp", { required: true })}
        placeholder="OTP"
      />
      {errors.otp && <span>Please enter a valid OTP</span>}
      <input type="submit" className="button" value={buttonText} />
    </form>
  );
};

export default observer(OtpAuth);
