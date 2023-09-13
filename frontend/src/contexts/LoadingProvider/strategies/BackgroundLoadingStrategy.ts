import { AnimationControls } from "framer-motion";
import { Animations, BaseLoadingStrategy } from "./BaseLoadingStrategy";

class BackgroundLoadingStrategy
  implements BaseLoadingStrategy {
  animation = Animations.BACKGROUND;

  async openAnimation(controls: AnimationControls) {
    controls.set({ scaleY: 0, transformOrigin: "bottom" })
    await controls.start({ scaleY: 1 })
  }

  async endAnimation(controls: AnimationControls) {
    controls.set({ scaleY: 1, transformOrigin: "top" })
    await controls.start({ scaleY: 0 })
  }
}

export default new BackgroundLoadingStrategy()