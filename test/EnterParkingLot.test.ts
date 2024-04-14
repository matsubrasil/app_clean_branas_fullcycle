import { EnterParkingLot } from '../src/core/usecase/EnterParkingLot.usecase'
import ParkingLotRepositoryMemory from '../src/infra/repository/ParkingLotMemory.infra-repository'

test('Should enter parking lot', async function () {
  const parkingLotMemoryRepository = new ParkingLotRepositoryMemory()
  const enterParkingLot = new EnterParkingLot(parkingLotMemoryRepository)
  const parkingLot = await enterParkingLot.execute('shopping')
  expect(parkingLot.code).toBe('shopping')
})
