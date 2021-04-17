import { createContext } from "react";
import ShowMenu from "./ShowMenu";
import UnitStore from "./unitStore";

export class RootStore {
  showMenu: ShowMenu;
  unitStore: UnitStore
  constructor() {
    this.showMenu = new ShowMenu(this);
    this.unitStore = new UnitStore(this);
  }
}
export const RootStoreContext = createContext(new RootStore());
