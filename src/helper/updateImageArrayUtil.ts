import { IImage } from "../models/image";

export const updateImageArray = (imageArray: IImage[], image: IImage) => {
  let temp = imageArray.slice();
  const index = imageArray.indexOf(image);
  temp.splice(index, 1);
  return temp;
};
