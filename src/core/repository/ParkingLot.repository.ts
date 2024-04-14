import ParkingLot from '../entity/ParkingLot.entity'

export default interface ParkingLotRepository {
  getParkingLot(code: string): Promise<ParkingLot>
  saveParkedCar(code: string, plate: string, date: Date): void
}
