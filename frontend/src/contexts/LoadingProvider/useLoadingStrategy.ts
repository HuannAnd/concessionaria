
import AnimationsOrquestrator from './strategies'

import BaseLoadingProps from './components/BaseLoadingProps';
import { BaseLoadingStrategy } from './strategies/BaseLoadingStrategy';

import { useAnimationControls } from "framer-motion";
import useStrategyComponent, { LoadingComponent } from './useStrategyComponent';

export default function useLoadingStrategy(strategy: string): [BaseLoadingStrategy, LoadingComponent] {
  const controls = useAnimationControls()

  const AnimationComponent = useStrategyComponent(strategy)
  const newStrategy = AnimationsOrquestrator.getStrategy(strategy)

  type AnimationComponentProps = React.ComponentProps<LoadingComponent>;

  return [newStrategy, AnimationComponent]
  return {
    strategy: "",
    Animation: "",
    props: ""
  }
}
