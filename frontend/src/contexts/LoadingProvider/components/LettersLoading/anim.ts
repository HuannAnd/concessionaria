import { AnimationControls } from "framer-motion";
import { BaseLoadingStrategy } from "../BaseLoadingStrategy";

export default class LettersLoadingStrategy extends BaseLoadingStrategy {
  constructor(controls: AnimationControls) {
    super(controls, "letters")
  }
  public async slideIn() {
    console.log("slideIn has fired")
    this.controls.set({ y: "100%", opacity: 0 })
    await this.controls.start((i: number) => ({ y: "0%", opacity: 1, transition: { duration: 1, delay: i * .1, ease: [0.76, 0, 0.24, 1] } }))
  }

  public async slideOut() {
    this.controls.set({ y: "0%", opacity: 1 })
    await this.controls.start((i: number) => ({ y: "-100%", opacity: 0, transition: { duration: 1, delay: i * .1, ease: [0.76, 0, 0.24, 1] } }))

    // this.controls.
  }
}