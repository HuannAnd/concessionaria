import { AnimationControls } from "framer-motion";
import { BaseLoadingStrategy, Animations } from "./BaseLoadingStrategy";

class DotsLoadingStrategy implements BaseLoadingStrategy {
  animation = Animations.DOTS;
  async openAnimation(controls: AnimationControls) {
    console.log("DotsLoadingStrategy on DotsLoadingStrategy has fired")
    controls.set({ opacity: 0 })
    controls.start((i: number) => ({
      opacity: 1,
      transition: { repeat: Infinity, duration: 1, delay: i * .1 }
    }
    ))
  }

  async endAnimation(controls: AnimationControls) {
    controls.set({ opacity: 1 })
    await controls.start({ opacity: 0 })
  }
}

export default new DotsLoadingStrategy()