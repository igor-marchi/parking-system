import { Location } from '../../../../core/enum/Location';
import { AirportFareCalculator } from './calculatorsMethods/AirportFareCalculator';
import { BeachFareCalculator } from './calculatorsMethods/BeachFareCalculator';
import { ShoppingFareCalculator } from './calculatorsMethods/ShoppingFareCalculator';

export class FareCalculatorFactory {
  static create(location: Location) {
    switch (location) {
      case Location.AIRPORT:
        return new AirportFareCalculator();
      case Location.SHOPPING:
        return new ShoppingFareCalculator();
      case Location.BEACH:
        return new BeachFareCalculator();
      default:
        throw new Error('Not implemented location');
    }
  }
}
