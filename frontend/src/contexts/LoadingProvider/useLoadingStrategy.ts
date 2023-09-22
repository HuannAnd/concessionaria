import { Dispatch, SetStateAction, useState } from "react"

import { useAnimationControls } from "framer-motion"
import AnimationsOrquestrator from "./AnimationsOrquestrator"

import { Strategy } from "./strategies/type"
import { LoadingProps } from "./components/type"

type TUseStrategyResult<T> = {
  loading: {
    strategy: any,
    props: any
  },
  setProps: any,
  setStrategy: any
}

export default function useStrategy<T extends "dots" | "letters" | "background">(intialStrategy: T, initialProps: Omit<LoadingProps<T>, "controls">): TUseStrategyResult<T> {
  const controls = useAnimationControls()
  const [strategy, setStrategy] = useState<"dots" | "letters" | "background">(intialStrategy)
  const [props, setProps] = useState(initialProps)
  const Orquestrator = new AnimationsOrquestrator(controls)

  const Strategy = Orquestrator.getStrategy(strategy)

  return {
    loading: {
      strategy: Strategy,
      props,
    },
    setProps,
    setStrategy
  }
}