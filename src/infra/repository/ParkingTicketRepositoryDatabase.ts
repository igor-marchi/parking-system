import { ParkingTicket } from '../../core/entities/ParkingTicket';
import { ParkingTicketRepository } from '../../core/repository/ParkingTicketRepository';

export class ParkingTicketRepositoryDatabase implements ParkingTicketRepository {
  private dataBase: ParkingTicket[];

  constructor() {
    this.dataBase = [];
  }

  getByPlate(plate: string): Promise<ParkingTicket | null> {
    const parkingTicket = this.dataBase.find((ticket) => ticket.getPlate() === plate);
    return Promise.resolve(parkingTicket || null);
  }

  save(input: ParkingTicket): Promise<void> {
    this.dataBase.push(input);
    return Promise.resolve();
  }

  update(input: ParkingTicket): Promise<void> {
    const index = this.dataBase.findIndex((ticket) => ticket.getPlate() === input.getPlate());
    this.dataBase[index] = input;
    return Promise.resolve();
  }
}
