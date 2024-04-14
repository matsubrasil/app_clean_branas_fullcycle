import { EnterParkingLot } from '../src/core/usecase/EnterParkingLot.usecase'
import GetParkingLot from '../src/core/usecase/GetParkingLot.usecase'
import ParkingLotRepositoryMemory from '../src/infra/repository/ParkingLotMemory.infra-repository'

test('Should enter parking lot', async function () {
  const parkingLotMemoryRepository = new ParkingLotRepositoryMemory()
  const enterParkingLot = new EnterParkingLot(parkingLotMemoryRepository)
  const getParkingLot = new GetParkingLot(parkingLotMemoryRepository)

  const parkingLotBeforeEnter = await getParkingLot.execute('shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

  await enterParkingLot.execute(
    'shopping',
    'MMM-0001',
    new Date('2021-03-01T10:00:00')
  )

  const parkingLotAfterEnter = await getParkingLot.execute('shopping')
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1)
})

test('Should be closed', async function () {
  const parkingLotMemoryRepository = new ParkingLotRepositoryMemory()
  const enterParkingLot = new EnterParkingLot(parkingLotMemoryRepository)
  const getParkingLot = new GetParkingLot(parkingLotMemoryRepository)

  const parkingLotBeforeEnter = await getParkingLot.execute('shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

  await enterParkingLot.execute(
    'shopping',
    'MMM-0001',
    new Date('2021-03-01T23:00:00')
  )
})

test('Should be full', async function () {
  const parkingLotMemoryRepository = new ParkingLotRepositoryMemory()
  const enterParkingLot = new EnterParkingLot(parkingLotMemoryRepository)
  const getParkingLot = new GetParkingLot(parkingLotMemoryRepository)

  const parkingLotBeforeEnter = await getParkingLot.execute('shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

  await enterParkingLot.execute(
    'shopping',
    'MMM-0001',
    new Date('2021-03-01T09:00:00')
  )

  await enterParkingLot.execute(
    'shopping',
    'MMM-0002',
    new Date('2021-03-01T10:00:00')
  )

  await enterParkingLot.execute(
    'shopping',
    'MMM-0003',
    new Date('2021-03-01T11:00:00')
  )

  await enterParkingLot.execute(
    'shopping',
    'MMM-0004',
    new Date('2021-03-01T12:00:00')
  )

  await enterParkingLot.execute(
    'shopping',
    'MMM-0005',
    new Date('2021-03-01T13:00:00')
  )

  await enterParkingLot.execute(
    'shopping',
    'MMM-0006',
    new Date('2021-03-01T14:00:00')
  )
})
