import { FareCalculatorFactory } from '../../domain/application/calculators/fareCalculator/FareCalculatorFactory';
import { Location } from '../enum/Location';

export class ParkingTicket {
  private fare: number;
  private checkOutDate?: Date;

  constructor(
    private plate: string,
    private checkInDate: Date,
    private location: Location,
  ) {
    this.fare = 0;
  }

  checkOut(checkOutDate: Date): void {
    this.checkOutDate = checkOutDate;
    const fareCalculator = FareCalculatorFactory.create(this.location);
    this.fare = fareCalculator.calculate(this.checkInDate, this.checkOutDate);
  }

  getPlate(): string {
    return this.plate;
  }

  getCheckInDate(): Date {
    return this.checkInDate;
  }

  getLocation(): Location {
    return this.location;
  }

  getFare(): number {
    return this.fare;
  }

  getCheckOutDate(): Date | undefined {
    return this.checkOutDate;
  }
}
