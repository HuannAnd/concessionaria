import Car from "./Car"

import { ICarData } from "./type"

class CarsService {
  constructor(
    private cars = [
      new Car(1, "large", "jpg", "mercedes benz"),
      new Car(2, "large", "jpg", "kia"),
      new Car(3, "large", "jpg", "kia"),
      new Car(4, "large", "png", "kia"),
      new Car(5, "large", "jpg", "kia"),
      new Car(6, "large", "jpg", "kia"),
      new Car(1, "executive", "png", "kia"),
      new Car(2, "executive", "png", "kia"),
      new Car(3, "executive", "png", "kia"),
      new Car(4, "executive", "png", "kia"),
      new Car(5, "executive", "png", "kia"),
      new Car(6, "executive", "png", "kia"),
    ]
  ) {}

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