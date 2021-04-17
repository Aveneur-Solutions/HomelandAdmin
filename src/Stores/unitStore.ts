import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import { IUnit } from "../models/unit";
import { RootStore } from "./rootStore";

export default class UnitStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable units: IUnit[] = [];

  @action listUnits = async () => {
    try {
      const units = await agent.Units.unitList();
      runInAction(() => {
        this.units = units;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action addUnit = async (data: IUnit) => {
    try {
      await agent.Units.create(data);
      runInAction(() => {
        this.units.push(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action editUnit = async (data: IUnit) => {
    try {
      await agent.Units.edit(data.id, data);
    } catch (error) {
      console.log(error);
    }
  };
}
