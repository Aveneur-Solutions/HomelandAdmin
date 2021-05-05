import { action, makeObservable, observable, reaction, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { RootStore } from "./rootStore";

export default class CommonStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          localStorage.setItem("jwt", token);
        } else {
          localStorage.removeItem("jwt");
        }
      }
    );
  }

  @observable token = localStorage.getItem("jwt");
  
  @action setToken = (token: string) => {
    localStorage.setItem("jwt", token);
    this.token = token;
  };

  @action removeToken = () => {
    localStorage.removeItem("jwt");
    this.token = null;
  };
}
