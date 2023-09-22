'use client';

import { useEffect, useRef } from 'react'

import DotsLoading from "./DotsLoading";
import LettersLoading from "./LettersLoading";
import CurtainLoading from "./BackgroundLoading";

import { LoadingProps, TAnimatioKey, Strategy } from "./type";
import { AnimationControls, useAnimate } from "framer-motion";
import AnimationsOrquestrator from '../AnimationsOrquestrator';

export default function GenericLoading<
  TStrategyValue extends TAnimatioKey,
  TStrategy extends Strategy<TStrategyValue>,
  TPropsStrategy extends LoadingProps<TStrategyValue>
>({
  strategy,
  props
}: {
  strategy: TStrategy,
  props: TPropsStrategy
}) {
  // const [scope, animate] = useAnimate()
  // const ref = useRef<any>(null!)
  // const Strategy =
  //   new AnimationsOrquestrator(ref as AnimationControls)
  //     .getStrategy(strategy)

  // useEffect(() => {
  //   if (!strategy) return
  //   (
  //     async () => {
  //       await Strategy.slideIn()
  //     }
  //   )()
  // }, [strategy])

  switch (strategy.animation) {
    case "letters":
      return <LettersLoading {...props as any} controls={strategy.controls} />
    case "dots":
      return <DotsLoading {...props as any} controls={strategy.controls} />
    case "background":
    default:
      return <CurtainLoading {...props} controls={strategy.controls} />
  }
}

