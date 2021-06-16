import { action, makeObservable, observable, runInAction } from "mobx";
import { history } from "..";
import agent from "../api/agent";
import  { ICustomer, ICustomerDetails } from "../models/user";
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
    @observable currentCustomer : ICustomerDetails | null = null;
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
    @action getCustomerDetails = async (number : string) => {
        var pn = number.slice(3,14);
        // console.log(pn);
       try{
         var details = await agent.Admin.customerDetails(pn)
   
         runInAction(() => {
           this.currentCustomer = details;
           history.push(`/customerDetails/${details.phoneNumber}`);
         })
       }catch(error)
       {
         console.log(error);
       }
     }
}