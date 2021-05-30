import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import IUser, { ICustomer } from "../models/user";
import { RootStore } from "./rootStore";

export default class CustomerStore{
    rootStore : RootStore;
    constructor(rootStore : RootStore)
    {
        this.rootStore = rootStore;
        makeObservable(this)
    }
    @observable customerList : ICustomer[] | null = null;
    @observable loading : boolean = false;
    @action getCustomerList = async ()  => {
        this.loading = true;
        try{
            const customers = await agent.Admin.customerList();  
            console.log(customers)         
            runInAction(() => {
              this.customerList = customers.filter(x => x.role === "User");
              this.loading = false;             
            })
        }catch(error)
        {
            console.log(error)
        }
      
    }   
}