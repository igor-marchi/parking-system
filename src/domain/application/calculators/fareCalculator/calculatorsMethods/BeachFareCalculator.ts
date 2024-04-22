import { FareCalculator } from '../../../../../core/calculators/FareCalculator';

export class BeachFareCalculator implements FareCalculator {
  calculate(checkInDate: Date, checkOutDate: Date): number {
    return 30;
  }
}
