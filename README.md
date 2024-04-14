# Clean Architecture

- Rodrigo Branas
- https://www.youtube.com/watch?v=BuSf7VsH064&list=WL&index=2&t=8729s
- canal Full Cycle

## Roteiro

1. Por onde começar?

> Pelas regras de negócios, ou seja, modelagem dos casos de uso, independente da interface gráfica ou banco de dados

## Caso

Entity

- ParkingLot

  - code
  - capacity
  - openHour
  - closeHour

- ParkedCar
  - code
  - plate
  - date

Use Case

EnterParkingLot
LeaveParkingLot

## 1. Test EnterParkingLot

EnterParkingLot.test.ts
