import BaseLoadingProps from './components/BaseLoadingProps'
import CurtainLoading from './components/BackgroundLoading'
import DotsLoading from './components/DotsLoading'
import LettersLoading from './components/LettersLoading'

export type LoadingComponent =
  | typeof DotsLoading
  | typeof LettersLoading
  | typeof CurtainLoading;

export default function useStrategyComponent(strategy: string): LoadingComponent {
  switch (strategy) {
    case "dots":
      return DotsLoading
    case "letters":
      return LettersLoading
    case "background":
    default:
      return CurtainLoading
  }
}