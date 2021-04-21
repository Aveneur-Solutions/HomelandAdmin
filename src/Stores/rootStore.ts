import { createContext } from "react";
import CommonStore from "./commonStore";
import ShowMenu from "./ShowMenu";
import UnitStore from "./unitStore";
import UserStore from "./userStore";

export class RootStore {
  showMenu: ShowMenu;
  unitStore: UnitStore;
  userStore: UserStore;
  commonStore: CommonStore;
  constructor() {
    this.showMenu = new ShowMenu(this);
    this.unitStore = new UnitStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
  }
}
export const RootStoreContext = createContext(new RootStore());
