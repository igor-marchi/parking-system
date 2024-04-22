import { FareCalculator } from '../../../../../core/calculators/FareCalculator';

export class AirportFareCalculator implements FareCalculator {
  calculate(checkInDate: Date, checkOutDate: Date): number {
    const hourDiff = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60);
    return hourDiff * 10;
  }
}
