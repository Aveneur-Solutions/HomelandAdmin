import { IImageUpload } from "./image";

export interface IUnit {
  id: string;
  size: number;
  price: number;
  level: number;
  buildingNumber: number;
  noOfBedrooms: number;
  noOfBaths: number;
  noOfBalconies: number;
  bookingPrice: number;
  isBooked: boolean;
  isSold : boolean;
  downPaymentDays: number;
  netArea: number;
  commonArea: number;
  images: any[];
}


// export interface IImage {
//   imageLocation: string
// }
