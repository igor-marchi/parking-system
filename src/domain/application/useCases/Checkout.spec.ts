import { Location } from '../../../core/enum/Location';
import { ParkingTicketRepositoryDatabase } from '../../../infra/repository/ParkingTicketRepositoryDatabase';
import { CheckInUseCase } from './CheckInUseCase';
import { CheckOutUseCase } from './CheckOutUseCase';

describe('Given a vehicle that has checked, when the vehicle checks out, then the correct fare should be calculated', () => {
  it('AIRPORT', async () => {
    const plate = 'AAA-' + `${Math.random() * 1000}`.padStart(4, '0');
    const parkingTicketRepository = new ParkingTicketRepositoryDatabase();
    const checkInUseCase = new CheckInUseCase(parkingTicketRepository);
    const inputCheckIn = {
      plate,
      checkInDate: new Date('2024-09-01T10:00:00'),
      location: Location.AIRPORT,
    };
    await checkInUseCase.execute(inputCheckIn);
    const checkOutUseCase = new CheckOutUseCase(parkingTicketRepository);
    const inputCheckOut = {
      plate,
      checkOutDate: new Date('2024-09-01T12:00:00'),
      location: Location.AIRPORT,
    };
    const output = await checkOutUseCase.execute(inputCheckOut);
    expect(output.fare).toBe(20);
  });

  it('SHOPPING', async () => {
    const plate = 'AAA-' + `${Math.random() * 1000}`.padStart(4, '0');
    const parkingTicketRepository = new ParkingTicketRepositoryDatabase();
    const checkInUseCase = new CheckInUseCase(parkingTicketRepository);
    const inputCheckIn = {
      plate,
      checkInDate: new Date('2024-09-01T10:00:00'),
      location: Location.SHOPPING,
    };
    await checkInUseCase.execute(inputCheckIn);
    const checkOutUseCase = new CheckOutUseCase(parkingTicketRepository);
    const inputCheckOut = {
      plate,
      checkOutDate: new Date('2024-09-01T12:00:00'),
      location: Location.SHOPPING,
    };
    const output = await checkOutUseCase.execute(inputCheckOut);
    expect(output.fare).toBe(30);
  });

  it('BEACH', async () => {
    const plate = 'AAA-' + `${Math.random() * 1000}`.padStart(4, '0');
    const parkingTicketRepository = new ParkingTicketRepositoryDatabase();
    const checkInUseCase = new CheckInUseCase(parkingTicketRepository);
    const inputCheckIn = {
      plate,
      checkInDate: new Date('2024-09-01T10:00:00'),
      location: Location.BEACH,
    };
    await checkInUseCase.execute(inputCheckIn);
    const checkOutUseCase = new CheckOutUseCase(parkingTicketRepository);
    const inputCheckOut = {
      plate,
      checkOutDate: new Date('2024-09-01T12:00:00'),
      location: Location.BEACH,
    };
    const output = await checkOutUseCase.execute(inputCheckOut);
    expect(output.fare).toBe(30);
  });
});
