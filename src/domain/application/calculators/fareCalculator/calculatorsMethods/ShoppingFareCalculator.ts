import { FareCalculator } from '../../../../../core/calculators/FareCalculator';

export class ShoppingFareCalculator implements FareCalculator {
  calculate(checkInDate: Date, checkOutDate: Date): number {
    const hourDiff = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60);
    let fare = 30;
    const remainingHours = hourDiff - 3;
    if (remainingHours > 0) fare += remainingHours * 10;
    return fare;
  }
}
