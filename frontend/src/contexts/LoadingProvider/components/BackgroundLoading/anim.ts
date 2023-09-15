import { AnimationControls } from "framer-motion";
import BaseLoadingStrategy from "../BaseLoadingStrategy";

import { Power3 } from 'gsap'

export default class BackgroundLoadingStrategy
  extends BaseLoadingStrategy {

  constructor(controls: AnimationControls) {
    super(controls, "background")
  }

  public async slideIn() {
    this.controls.set({ scaleY: 0, transformOrigin: "bottom" })
    await this.controls.start({ scaleY: 1, transition: { duration: 1, ease: Power3.easeInOut } })
  }

  public async slideOut() {
    this.controls.set({ scaleY: 1, transformOrigin: "top" })
    await this.controls.start({ scaleY: 0, transition: { duration: 1, ease: Power3.easeInOut } })
  }
}
