import PriceStrategy from "./PriceStrategy";

import { Country, Currency } from "./type";

export default class IndianPriceStrategy
  extends PriceStrategy {
  country: Country = Country.INDIA;
  currency: Currency = Currency.LAKH;
  dolarCotation = 4.92;

  constructor(price: number, discount: number) {
    super(price, discount)
  }
}