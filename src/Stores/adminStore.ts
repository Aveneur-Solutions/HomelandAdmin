import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { history } from "..";
import agent from "../api/agent";
import { updateImageArray } from "../helper/updateImageArrayUtil";
import { IImage, IImageUpload } from "../models/image";
import { IStats } from "../models/stats";
import { ICustomerDetails } from "../models/user";
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
  @observable image: IImage | null = null;
  @observable loading : boolean = false;
  @observable stats : IStats | null = null;
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
      this.loading = true;
      const images = await agent.Admin.getAllImages();
      runInAction(() => {
        this.galleryImages = images.filter(
          (image) => image.section === "gallery"
        );
        this.homeImages = images.filter((image) => image.section === "home");
        this.projectImages = images.filter(
          (image) => image.section === "projects"
        );
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action getImage = async (id: string) => {
    try {
      const image = await agent.Admin.getImage(id);
      runInAction(() => {
        this.image = image;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action deleteImage = async (image: IImage) => {
    try {
      await agent.Admin.deleteImage(image.id);
      runInAction(() => {
        if (image.section === "gallery") {
          let temp = updateImageArray(this.galleryImages, image);
          this.galleryImages = temp;
        }
        if (image.section === "home") {
          let temp = updateImageArray(this.homeImages, image);
          this.homeImages = temp;
        }
        if (image.section === "projects") {
          let temp = updateImageArray(this.projectImages, image);
          this.projectImages = temp;
        }
        history.push("/imageGallery");
      });
    } catch (error) {
      console.log(error);
    }
  };
  @action getStats = async () => {
    const stats = await agent.Admin.getStat();
    runInAction(() => {
      this.stats = stats;
    })
  }
  
}
