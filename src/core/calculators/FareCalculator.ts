export interface FareCalculator {
  calculate(checkInDate: Date, checkOutDate: Date): number;
}
