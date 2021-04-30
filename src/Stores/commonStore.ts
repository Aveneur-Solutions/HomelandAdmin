import { action, makeObservable, observable, reaction, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { IImageUpload, UploadableFiles } from "../models/image";
import { RootStore } from "./rootStore";

export default class CommonStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          localStorage.setItem("jwt", token);
        } else {
          localStorage.removeItem("jwt");
        }
      }
    );
  }

  @observable token = localStorage.getItem("jwt");
  @observable Images : IImageUpload | null = null;
  @action  UploadImages = async (images : IImageUpload) =>
  {  
    try{
     await agent.Admin.imageUpload(images)
      runInAction(() => {
        this.Images = images;
        toast.success(`Images have been uploaded successfully in ${images.section.toUpperCase()} section`);
      })
      console.log(this.Images);
    }catch(error)
    {
      toast.error("Couldn't Upload the images")
    }
 
  }
  @action setToken = (token: string) => {
    localStorage.setItem("jwt", token);
    this.token = token;
  };

  @action removeToken = () => {
    localStorage.removeItem("jwt");
    this.token = null;
  };
}
