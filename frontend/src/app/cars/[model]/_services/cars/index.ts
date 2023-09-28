import Car from "./Car"

import { ICarData } from "./type"

class CarsService {
  constructor(
    private cars = [
      new Car(1, "executive", "jpg", "mercedes benz"),
      new Car(2, "executive", "jpg", "kia")
    ]
  ) { }

  public getCar(carId: ICarData["id"]) {
    const car = this.cars.find(x => x.id === carId)
    return car
  }

  public getAllModels(model: ICarData["attach"]) {
    const cars = this.cars.filter(x => x.attach === model)
    return cars
  }
}

export default new CarsService()