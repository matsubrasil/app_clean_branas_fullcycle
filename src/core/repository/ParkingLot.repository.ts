import ParkingLot from '../entity/ParkingLot.entity'

export default interface ParkingLotRepository {
  getParkingLot(code: string): Promise<ParkingLot>
}
