import { IImageUpload } from "../models/image";
import { IUnit } from "../models/unit";

export const createUnitFormData = (data: IUnit) => {
  let formData = new FormData();
  formData.append("id", data.id);
  formData.append("size", data.size.toString());
  formData.append("price", data.price.toString());
  formData.append("level", data.level.toString());
  formData.append("buildingNumber", data.buildingNumber.toString());
  formData.append("noOfBedrooms", data.noOfBedrooms.toString());
  formData.append("noOfBaths", data.noOfBaths.toString());
  formData.append("noOfBalconies", data.noOfBalconies.toString());
  formData.append("bookingPrice", data.bookingPrice.toString());
  formData.append("downPaymentDays", data.downPaymentDays.toString());
  formData.append("netArea", data.netArea.toString());
  formData.append("commonArea", data.commonArea.toString());
  if (data.images) {
    formData.append("images", data.images[0]);
  }

  return formData;
};

export const createImageFormData = (data : IImageUpload) => {
  let formData = new FormData();

  for(let i = 0 ; i<data.file!.length;i++)
  {
    formData.append("file",data.file![i])
  }
  //formData.append("file",file);
  formData.append("section",data.section);
  return formData;
}
