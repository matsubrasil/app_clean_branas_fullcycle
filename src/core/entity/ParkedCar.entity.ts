export default class ParkedCar {
  code: string
  plate: string
  date: Date

  constructor(code: string, plate: string, date: Date) {
    const isPlateValid = /[A-Z]{3}-[0-9]{4}/.test(plate)

    if (!isPlateValid) {
      throw new Error('Invalid plate')
    }

    this.code = code
    this.plate = plate
    this.date = date
  }
}
