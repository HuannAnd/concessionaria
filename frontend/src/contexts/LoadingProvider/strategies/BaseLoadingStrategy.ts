import { AnimationControls } from 'framer-motion'

export enum Animations {
  DOTS = "dots",
  LETTERS = "letters",
  BACKGROUND = "background"

}

export interface BaseLoadingStrategy {
  animation: Animations

  openAnimation(controls: AnimationControls): Promise<void>

  endAnimation(controls: AnimationControls): Promise<void>
}