import { AnimationControls } from "framer-motion";
import BackgroundLoadingStrategy from "../components/BackgroundLoading/anim";
import { BaseLoadingStrategy } from "../components/BaseLoadingStrategy";
import DotsLoadingStrategy from "../components/DotsLoading/anim";
import LettersLoadingStrategy from "../components/LettersLoading/anim";

export default class AnimationsOrquestrator {
  private strategies: BaseLoadingStrategy[]
  constructor(
    private controls: AnimationControls,
  ) {
    this.strategies = [
      new DotsLoadingStrategy(this.controls),
      new LettersLoadingStrategy(this.controls),
      new BackgroundLoadingStrategy(this.controls)
    ]

  }

  getStrategy(strategy: "dots" | "background" | "letters"): BaseLoadingStrategy {
    let Strategy = this.strategies.find(x => x.animation === strategy)!
    Strategy.assignControls(this.controls)

    return Strategy
  }
}