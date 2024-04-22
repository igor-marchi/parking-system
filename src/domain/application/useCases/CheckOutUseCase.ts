import { Location } from '../../../core/enum/Location';
import { ParkingTicketRepository } from '../../../core/repository/ParkingTicketRepository';

export class CheckOutUseCase {
  constructor(private parkingTicketRepository: ParkingTicketRepository) {}

  async execute(input: Input): Promise<Output> {
    const parkingTicket = await this.parkingTicketRepository.getByPlate(input.plate);

    if (!parkingTicket) {
      throw new Error('Parking ticket not found');
    }
    parkingTicket.checkOut(input.checkOutDate);
    await this.parkingTicketRepository.update(parkingTicket);

    return {
      plate: parkingTicket.getPlate(),
      fare: parkingTicket.getFare(),
    };
  }
}

type Input = {
  plate: string;
  checkOutDate: Date;
  location: Location;
};

type Output = {
  plate: string;
  fare: number;
};
