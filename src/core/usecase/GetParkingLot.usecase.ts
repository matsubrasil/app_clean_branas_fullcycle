import ParkingLotRepository from '../repository/ParkingLot.repository'

export default class GetParkingLot {
  parkingLotRepository: ParkingLotRepository

  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository
  }

  execute(code: string) {
    return this.parkingLotRepository.getParkingLot(code)
  }
}
