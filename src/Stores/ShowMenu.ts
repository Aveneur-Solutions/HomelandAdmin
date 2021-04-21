import { observable, action, makeObservable } from "mobx";
import { RootStore } from "./rootStore";

export default class ShowMenu {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable adminDashboard = true;
  @observable showUnit = false;
  @observable showGallery = false;
  @observable showTax = false;
  @observable showLog = false;
  @observable showFeedback = false;
  @observable showCustomers = false;
  @observable showSettings = false;

  @action setAdminDash = () => {
    this.adminDashboard = true;
    this.showUnit = false;
    this.showGallery = false;
    this.showTax = false;
    this.showLog = false;
    this.showFeedback = false;
    this.showCustomers = false;
    this.showSettings = false;
  };

  @action setUnitVisibility = () => {
    this.adminDashboard = false;
    this.showUnit = true;
    this.showGallery = false;
    this.showTax = false;
    this.showLog = false;
    this.showFeedback = false;
    this.showCustomers = false;
    this.showSettings = false;
  };
  @action setGalleryVisibility = () => {
    this.adminDashboard = false;
    this.showUnit = false;
    this.showGallery = true;
    this.showTax = false;
    this.showLog = false;
    this.showFeedback = false;
    this.showCustomers = false;
    this.showSettings = false;
  };
  @action setTaxVisibility = () => {
    this.adminDashboard = false;
    this.showUnit = false;
    this.showGallery = false;
    this.showTax = true;
    this.showLog = false;
    this.showFeedback = false;
    this.showCustomers = false;
    this.showSettings = false;
  };
  @action setLogVisibility = () => {
    this.adminDashboard = false;
    this.showUnit = false;
    this.showGallery = false;
    this.showTax = false;
    this.showLog = true;
    this.showFeedback = false;
    this.showCustomers = false;
    this.showSettings = false;
  };
  @action setFeedbackVisibility = () => {
    this.adminDashboard = false;
    this.showUnit = false;
    this.showGallery = false;
    this.showTax = false;
    this.showLog = false;
    this.showFeedback = true;
    this.showCustomers = false;
    this.showSettings = false;
  };
  @action setCustomerVisibility = () => {
    this.adminDashboard = false;
    this.showUnit = false;
    this.showGallery = false;
    this.showTax = false;
    this.showLog = false;
    this.showFeedback = false;
    this.showCustomers = true;
    this.showSettings = false;
  };
  @action setSettingsVisibility = () => {
    this.adminDashboard = false;
    this.showUnit = false;
    this.showGallery = false;
    this.showTax = false;
    this.showLog = false;
    this.showFeedback = false;
    this.showCustomers = false;
    this.showSettings = true;
  };
}