'use client';

import { createContext, useLayoutEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion';

import useLoadingWithStrategies from './useLoadingWithStrategies';

import GenericLoading from './components/GenericLoading';
import { LoadingProps } from './components/type';

import useLoadingStrategy from './useLoadingStrategy';


interface LoadingProviderProps {
  children: React.ReactNode
}

type TAnimationKey = "dots" | "letters" | "background"

export const MountingLoadingContext = createContext<
  <TStrategyValue extends TAnimationKey, TStrategyProps extends Omit<LoadingProps<TStrategyValue>, "controls">>(
    href: string,
    newStrategy: TStrategyValue,
    newProps: TStrategyProps
  ) => void
>(() => { })
export const LoadingContext = createContext<boolean>({} as boolean)

export const ANIMATION_DURATION_IN_MS = 1000
export const ANIMATION_DURATION_IN_SECONDS = ANIMATION_DURATION_IN_MS / 1000

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const background = useLoadingStrategy("background", {})
  const { loading, setProps, setStrategy } = useLoadingStrategy("dots", { amount: 3 })

  const transitionTo = useLoadingWithStrategies(background.loading.strategy, loading.strategy)

  const mountLoading = async <
    TStrategyValue extends TAnimationKey,
    TStrategyProps extends Omit<LoadingProps<TStrategyValue>, "controls">
  >(
    href: string,
    newStrategy: TStrategyValue,
    newProps: TStrategyProps
  ) => {
    console.log("mountLoading has fired")
    setProps(newProps)
    setStrategy(newStrategy)

    transitionTo(href)
  }

  useLayoutEffect(() => {
    return () => {
      (async () => {
        await loading.strategy.slideOut()
      })()
    }
  }, [])

  return (
    <MountingLoadingContext.Provider value={mountLoading}>
      <AnimatePresence mode='wait'>
        <GenericLoading key={"loading_1"} strategy={background.loading.strategy} props={background.loading.props} />
        <GenericLoading key={"loading_2"} strategy={loading.strategy} props={loading.props} />
        {children}
      </AnimatePresence>
    </MountingLoadingContext.Provider>
  )
}


