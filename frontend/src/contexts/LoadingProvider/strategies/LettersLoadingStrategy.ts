import { AnimationControls } from "framer-motion";
import { BaseLoadingStrategy, Animations } from "./BaseLoadingStrategy";

class LettersLoadingStrategy implements BaseLoadingStrategy {
  animation = Animations.LETTERS
  async openAnimation(controls: AnimationControls) {
    controls.set({ y: "100%", opacity: 0 })
    await controls.start((i: number) => ({ y: "0%", opacity: 1, transition: { duration: 1, delay: i * .1, ease: [0.76, 0, 0.24, 1] } }))
  }
  async endAnimation(controls: AnimationControls) {
    controls.set({ y: "0%", opacity: 1 })
    await controls.start((i: number) => ({ y: "-100%", opacity: 0, transition: { duration: 1, delay: i * .1, ease: [0.76, 0, 0.24, 1] } }))
  }

}

export default new LettersLoadingStrategy()