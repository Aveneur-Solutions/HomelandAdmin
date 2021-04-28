import { IImage } from "./image";

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
  downPaymentDays: number;
  netArea: number;
  commonArea: number;
  images: any[];
}
export interface IUnitRead {
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
  downPaymentDays: number;
  netArea: number;
  commonArea: number;
  images?: IImage[] | null;
}

// export interface IImage {
//   imageLocation: string
// }
