import { ParkingTicket } from '../entities/ParkingTicket';

export interface ParkingTicketRepository {
  getByPlate(plate: string): Promise<ParkingTicket | null>;
  save(input: ParkingTicket): Promise<void>;
  update(input: ParkingTicket): Promise<void>;
}
