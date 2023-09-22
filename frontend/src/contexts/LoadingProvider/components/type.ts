import { AnimationControls } from "framer-motion"

import DotsLoadingStrategy from "./DotsLoading/anim"
import BackgroundLoadingStrategy from "./BackgroundLoading/anim"
import LettersLoadingStrategy from "./LettersLoading/anim"

export type TAnimatioKey = "dots" | "letters" | "background"

interface BaseLoadingProps {
  controls: AnimationControls
}
export interface DotsLoadingProps extends BaseLoadingProps { amount: number, }
export interface LettersLoadingProps extends BaseLoadingProps { innerText: string, }
export interface CurtainLoadingProps extends BaseLoadingProps { }

export type LoadingProps<T> = T extends "dots"
  ? DotsLoadingProps
  : T extends "letters"
  ? LettersLoadingProps
  : T extends "background"
  ? CurtainLoadingProps
  : never

export type Strategy<T> = T extends "dots"
  ? DotsLoadingStrategy
  : T extends "letters"
  ? LettersLoadingStrategy
  : T extends "background"
  ? BackgroundLoadingStrategy
  : never