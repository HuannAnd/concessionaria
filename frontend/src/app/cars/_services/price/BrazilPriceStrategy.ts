import PriceStrategy from "./PriceStrategy";

import { Country, Currency } from "./type";

export default class BrazilPriceStrategy
  extends PriceStrategy {
  public country: Country = Country.BRAZIL;
  currency: Currency = Currency.BRL;
  dolarCotation = 4.92;

  constructor(price: number, discount: number) {
    super(price, discount)
  }

  getPrice(): string {
    return `${this.currency} ${this.price.toFixed(2)}`
  }
}