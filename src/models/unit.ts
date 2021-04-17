interface IUnitModel {
  id: string;
  size: number;
  price: number;
  level: number;
  buildingNumber: number;
  noOfBedrooms: number;
  noOfBaths: number;
  noOfBalconies: number;
  bookingPrice: number;
}

export interface IUnit extends IUnitModel {
  isBooked: boolean;
  downPaymentDays: number;
}
