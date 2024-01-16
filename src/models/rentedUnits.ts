export interface RentedUnits {
  customerID: string;
  rentalID: number;
  location: string;
  dateStarted: Date;
  expextEndDate: Date;
  notes: string;
  active: boolean;
  customerName: string;
}
