import { AnimationControls } from "framer-motion";
import { BaseLoadingStrategy } from "../BaseLoadingStrategy";

export default class DotsLoadingStrategy extends BaseLoadingStrategy {
  constructor(controls: AnimationControls) {
    super(controls, "dots")
  }
  public async slideIn(): Promise<void> {
    this.controls.set({ opacity: 0 })
    this.controls.start((i: number) => ({
      opacity: 1,
      transition: { duration: 1, delay: i * .1 + .5, repeat: Infinity }
    }))
  }

  public async slideOut(): Promise<void> {
    // this.controls.set({ opacity: 1 })
    await this.controls.start((i: number) => ({ opacity: 0, transition: { delay: i * .1 } }))
  }
}