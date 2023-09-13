import BackgroundLoadingStrategy from "./BackgroundLoadingStrategy";
import { BaseLoadingStrategy } from "./BaseLoadingStrategy";
import DotsLoadingStrategy from "./DotsLoadingStrategy";
import LettersLoadingStrategy from "./LettersLoadingStrategy";

class AnimationsOrquestrator {
  constructor(
    private strategies = [
      DotsLoadingStrategy,
      LettersLoadingStrategy,
      BackgroundLoadingStrategy
    ]
  ) { }

  getStrategy(strategy: string): BaseLoadingStrategy {
    let currentStrategy = (this.strategies.find(x => x.animation === strategy))!

    return currentStrategy
  }
}

export default new AnimationsOrquestrator()