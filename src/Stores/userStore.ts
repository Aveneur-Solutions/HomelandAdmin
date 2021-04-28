import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import IUser, {
  IUserLogin,
  IUserLoginWithOtp,
  IUserRegister,
} from "../models/user";
import { RootStore } from "./rootStore";
import { history } from "../";
import { toast } from "react-toastify";
export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable user: IUser | null = null;

  @action login = async (body: IUserLogin) => {
    try {
      await agent.User.login(body);
    } catch (error) {
      toast.error("Wrong Credentials !! Retype your Phone Number and Password ");
      throw error;
    }
  };

  @action loginWithOtp = async (body: IUserLoginWithOtp) => {
    try {
      const user = await agent.User.loginWithOtp(body);
      runInAction(() => {
        this.user = user;
        this.rootStore.commonStore.setToken(user.token);
        history.push("/dashboard")
      });
    } catch (error) {
      toast.error("Wrong OTP . Check your message again and retype the OTP ");
      throw error;
    }
  };

  @action getUser = async () => {
    try {
      const user = await agent.User.currentUser();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.removeToken();
    this.user = null;
    history.push("./")

  };
}
