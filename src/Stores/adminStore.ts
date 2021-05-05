import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { IImage, IImageUpload } from "../models/image";
import { RootStore } from "./rootStore";

export default class AdminStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable Images: IImageUpload | null = null;
  @observable galleryImages: IImage[] = [];
  @observable homeImages: IImage[] = [];
  @observable projectImages: IImage[] = [];

  @action UploadImages = async (images: IImageUpload) => {
    try {
      await agent.Admin.imageUpload(images);
      runInAction(() => {
        this.Images = images;
        const length = images.file?.length;
        toast.success(
          `${
            length! > 1 ? `${length} Images have` : `${length} Image has`
          } been uploaded successfully in ${images.section.toUpperCase()} section`
        );
      });
      console.log(this.Images);
    } catch (error) {
      toast.error("Couldn't Upload the images");
    }
  };

  @action listAllImages = async () => {
    try {
      const images = await agent.Admin.getAllImages();
      runInAction(() => {
        this.galleryImages = images.filter(image => image.section === "gallery")
        this.homeImages = images.filter(image => image.section === "home")
        this.projectImages = images.filter(image => image.section === "projects")
      });
    } catch (error) {
      console.log(error);
    }
  };
}
