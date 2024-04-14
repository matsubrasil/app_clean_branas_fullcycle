import ParkingLot from '../entity/ParkingLot.entity'
import ParkingLotRepository from '../repository/ParkingLot.repository'

export class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository

  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository
  }

  async execute(code: string) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code)
    return parkingLot
  }
}
