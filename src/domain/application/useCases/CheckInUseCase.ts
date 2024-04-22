import { ParkingTicket } from '../../../core/entities/ParkingTicket';
import { Location } from '../../../core/enum/Location';
import { ParkingTicketRepository } from '../../../core/repository/ParkingTicketRepository';

export class CheckInUseCase {
  constructor(private parkingTicketRepository: ParkingTicketRepository) {}

  async execute(input: Input): Promise<void> {
    const existingTicket = await this.parkingTicketRepository.getByPlate(input.plate);

    if (existingTicket) {
      throw new Error('There is already a ticket for this plate');
    }

    const parkingTicket = new ParkingTicket(input.plate, input.checkInDate, input.location);
    await this.parkingTicketRepository.save(parkingTicket);
  }
}

type Input = {
  plate: string;
  checkInDate: Date;
  location: Location;
};
