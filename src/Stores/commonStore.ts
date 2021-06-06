import { action, makeObservable, observable, reaction } from "mobx";
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

  @observable token : string | null = window.localStorage.getItem("jwt");
  @observable loggedIn : boolean = false;

  @action setToken = (token: string) => {
    localStorage.setItem("jwt", token);
    this.token = token;
  };

  @action removeToken = () => {
    localStorage.removeItem("jwt");
    this.token = null;
  };
 
}
