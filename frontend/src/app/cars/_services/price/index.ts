import BrazilPriceStrategy from "./BrazilPriceStrategy";
import IndianPriceStrategy from "./IndianPriceStrategy";


class Orquestrator {
  constructor(
    price: number,
    discount: number,
    private strategies = [
      new IndianPriceStrategy(price, discount),
      new BrazilPriceStrategy(price, discount)
    ]
  ) { }

  getStrategy(strategy: string) {
    const result = this.strategies.find(x => x.country === strategy)
    return result
  }
}

export default Orquestrator;