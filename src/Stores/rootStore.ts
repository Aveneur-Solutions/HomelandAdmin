import { createContext } from "react";
import AdminStore from "./adminStore";
import CommonStore from "./commonStore";
import UnitStore from "./unitStore";
import UserStore from "./userStore";

export class RootStore {
  unitStore: UnitStore;
  userStore: UserStore;
  commonStore: CommonStore;
  adminStore: AdminStore;
  constructor() {
    this.unitStore = new UnitStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.adminStore = new AdminStore(this);
  }
}
export const RootStoreContext = createContext(new RootStore());
