import path from "path"

import { ICarData } from './type'

export default class Car
  implements ICarData {
  public url: string | null = null;
  constructor(
    public id: ICarData["id"],
    public attach: ICarData["attach"],
    public urlFormat: ICarData["urlFormat"],
    public brand: ICarData["brand"]
  ) {
    this.createUrl()
  }
  createUrl(): void {
    const carImageUrl = path.join(process.cwd(), `public/cars/${this.attach}/${this.id}.${this.urlFormat}`)
    this.url = carImageUrl
  }
}