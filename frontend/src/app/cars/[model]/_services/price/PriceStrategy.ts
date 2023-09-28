import { Country, Currency } from "./type";


export default abstract class PriceStrategy {
  public country: Country = Country.AMERICA;
  protected currency: Currency = Currency.USD;
  protected dolarCotation = 1;

  constructor(
    protected price: number,
    protected discount: number
  ) { }

  getPrice(): string {
    return `${this.currency} ${this.price}`
  }
  getPriceInDolar(): string {
    const price = this.price / this.dolarCotation

    return `${Country.AMERICA} ${price}`
  }
  getDiscount(): string {
    const newPrice = this.price * this.discount;

    return `${this.currency} ${newPrice}`
  }
}