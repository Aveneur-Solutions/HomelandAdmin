import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import IUser, {
  IUserLogin,
  IUserLoginWithOtp
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
        if(user.role === "Super Admin")
        {
          this.rootStore.commonStore.setToken(user.token);
          this.rootStore.commonStore.loggedIn = true;
          history.push("/dashboard")

        }
        else toast.error("Sorry Only Internals can log in");
       
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
        this.rootStore.commonStore.loggedIn = true;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.removeToken();
    this.user = null;
    this.rootStore.commonStore.loggedIn = false;
    history.push("/")
  };
}
