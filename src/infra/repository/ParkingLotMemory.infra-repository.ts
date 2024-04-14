import ParkingLot from '../../core/entity/ParkingLot.entity'
import ParkingLotRepository from '../../core/repository/ParkingLot.repository'

export default class ParkingLotRepositoryMemory
  implements ParkingLotRepository
{
  getParkingLot(code: string): Promise<ParkingLot> {
    return Promise.resolve(new ParkingLot(code, 5, 8, 22))
  }
}
