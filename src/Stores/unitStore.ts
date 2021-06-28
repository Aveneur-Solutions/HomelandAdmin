import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { IUnit } from "../models/unit";
import { RootStore } from "./rootStore";
import { history } from "../";
import IBooking from "../models/booking";
import ITransfer from "../models/transfers";
import { IAllotment, IAllotmentRequest } from "../models/allotment";

export default class UnitStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable units: IUnit[] = [];
  @observable bookings: IBooking[] = [];
  @observable transfers: ITransfer[] = [];
  @observable bookedUnits: IUnit[] = [];
  @observable allotedUnits: IUnit[] = [];
  @observable availableUnits: IUnit[] = [];
  @observable currentUnit: IUnit | null = null;
  @observable loading: boolean = true;
  @observable allotments: IAllotment[] = [];

  @action listUnits = async () => {
    try {
      this.loading = true;
      const units = await agent.Units.unitList();
      const bookedUnits = units.filter((x) => x.isBooked);
      const availableUnits = units.filter((x) => !x.isBooked && !x.isSold);
      const allotedUnits = units.filter((x) => x.isSold);
      runInAction(() => {
        this.units = units;
        this.bookedUnits = bookedUnits;
        this.availableUnits = availableUnits;
        this.allotedUnits = allotedUnits;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action listAllBookings = async () => {
    try {
      this.loading = true;
      const bookings = await agent.Units.getAllBookings();
      runInAction(() => {
        this.bookings = bookings;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action listAllTransfers = async () => {
    try {
      this.loading = true;
      const transfers = await agent.Units.getAllTransfers();
      runInAction(() => {
        this.transfers = transfers;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action unitDetails = async (id: string) => {
    try {
      const unit = await agent.Units.details(id);
      runInAction(() => {
        this.currentUnit = unit;
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
        history.push("/units");
        toast.success(`Flat ${data.id} has been added Successfully`);
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
        data.images = data.images ? data.images : this.units[index].images;
        this.units[index] = data;
        this.currentUnit = data;
        history.push(`/units`);
        toast.success(`Flat ${data.id} has been updated Successfully`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action deleteUnit = async (id: string) => {
    try {
      await agent.Units.delete(id);
      runInAction(() => {
        console.log("success");
        const unit = this.units.filter((unit) => unit.id !== id);
        this.units = unit;
        toast.success(`Flat ${id} has been deleted Successfully`);
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action setCurrentUnit = async (unit: IUnit | null) => {
    this.currentUnit = unit;
  };

  @action createAllotment = async (id: string) => {
    console.log(id);
    var allotementReq: IAllotmentRequest = {
      flatId: id,
    };
    try {
      await agent.Units.createAllotment(allotementReq);
      toast.success(`Allotment creation successful for ${id}`);
      history.push("/units");
    } catch (error) {
      toast.error("Couldn't create an allotment");
    }
  };

  @action listAllotment = async () => {
    try {
      const allotments = await agent.Units.getAllotments();
      runInAction(() => {
        this.allotments = allotments;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
