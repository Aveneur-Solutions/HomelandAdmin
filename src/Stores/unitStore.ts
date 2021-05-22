import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { IUnit} from "../models/unit";
import { RootStore } from "./rootStore";
import { history } from "../";
import IBooking from "../models/booking";
import ITransfer from "../models/transfers";

export default class UnitStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable units: IUnit[] = [];
  @observable bookings : IBooking[] = [];
  @observable transfers : ITransfer[] = [];
  @observable bookedUnits : IUnit[] = [];
  @observable allotedUnits : IUnit[] = [];
  @observable availableUnits : IUnit[] = [];
  @observable currentUnit : IUnit | null = null;

  @action listUnits = async () => {
    try {
      const units = await agent.Units.unitList();
      const bookedUnits = units.filter(x => x.isBooked);
      const availableUnits = units.filter(x => !x.isBooked)
      runInAction(() => {
        this.units = units;
        this.bookedUnits = bookedUnits;
        this.availableUnits = availableUnits;
      });
    } catch (error) {
      console.log(error);
    }
  };
  @action listAllBookings = async () => {
      try{
       const bookings = await agent.Units.getAllBookings();
       runInAction(() => {
         this.bookings = bookings
       })

      }catch(error)
      {
        console.log(error)
      }
  }
  @action listAllTransfers = async () => {
    try{
     const transfers = await agent.Units.getAllTransfers();
     runInAction(() => {
       this.transfers = transfers
     })

    }catch(error)
    {
      console.log(error)
    }
}

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
        history.push("/units");
        toast.success(`Flat ${data.id} has been added Successfully`)
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
        this.currentUnit = data;
        history.push(`/unit/${data.id}`)
        toast.success(`Flat ${data.id} has been updated Successfully`)
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
        toast.success(`Flat ${id} has been deleted Successfully`)
      })
    }
    catch (error){
      console.log(error)
    }
  }
  
  @action setCurrentUnit = async (unit : IUnit | null) => 
  {
    this.currentUnit = unit
  }
}
