import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { IUnit } from "../models/unit";
import { RootStore } from "./rootStore";
import { history } from "../";

export default class UnitStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable units: IUnit[] = [];
  @observable currentUnit : IUnit | null = null;
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
 @action unitDetails = async (id : string) => {
   try{
      const unit = await agent.Units.details(id);
     runInAction(() => {
       this.currentUnit = unit;
       history.push(`/unit/${id}`)
     });
   }catch (error)
   {
     console.log(error);
   }
 }
  @action addUnit = async (data: IUnit) => {
    try {
      await agent.Units.create(data);
      runInAction(() => {
        this.units.push(data);
      });
    } catch (error) {
      toast.error("A flat with this id already exists");
      console.log(error);
    }
  };
  
  @action editUnit = async (data: IUnit) => {
    try {
      await agent.Units.edit(data.id, data);
      runInAction(() => {
        const unit = this.units.filter((unit) => unit.id === data.id)[0];
        const index = this.units.indexOf(unit);
        this.units[index] = data;
      });
    } catch (error) {
      console.log(error);
    }
  };
  @action deleteUnit = async (id : string) => {
    try{
      await agent.Units.delete(id);
      runInAction (() => {
        console.log("success")
        const unit = this.units.filter((unit) => unit.id !== id);
        this.units = unit;
      })
    }
    catch (error){
      console.log(error)
    }
  }
}
