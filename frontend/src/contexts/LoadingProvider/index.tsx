'use client';

import { createContext, useState } from 'react'


import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion';

import useLoading from './useLoading';
import useLoadingStrategy from './useLoadingStrategy';


import LoadingAnimation from './components/LoadingAnimation';
import BaseLoadingProps from './components/BaseLoadingProps';
import DotsLoading from './components/DotsLoading';

import { BaseLoadingStrategy } from './strategies/BaseLoadingStrategy';
import Orquestrator from './strategies'
import DotsLoadingStrategy from './strategies/DotsLoadingStrategy';

interface LoadingProviderProps {
  children: React.ReactNode
}

enum AnimationsStrategies {
  DOTS = "dots",
  LETTERS = "letters"

}

export const MountingLoadingContext = createContext<(url: string) => void>(() => { })
export const SetAnimationStrategyContext = createContext<(strategy: AnimationsStrategies) => void>(() => { })

export const ANIMATION_DURATION_IN_MS = 1000
export const ANIMATION_DURATION_IN_SECONDS = ANIMATION_DURATION_IN_MS / 1000

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const pathname = usePathname()
  const router = useRouter()

  const background = useLoadingStrategy("background")
  const [strategy, LoadingAnimation] = useLoadingStrategy(["dots", {}])

  const { mountingLoading, isLoading } = useLoading(pathname, background, route)

  async function previewLoading<
    TBaseStrategy extends BaseLoadingStrategy,
    TStrategyProps extends keyof TBaseStrategy
  >(
    url: string,
    strategy: TBaseStrategy,
    ...props: TStrategyProps[]
  ) {
    const newStrategy = Orquestrator.getStrategy(strategy)

    setAnimationStrategy([newStrategy, LoadingAnimation])

    document.body.style.cursor = "wait"
    router.push(url)
  }

  return (
    <MountingLoadingContext.Provider value={mountingLoading}>
      <AnimatePresence>
        {/* <Preloader controls={controls} pathname={pathname} /> */}
        {
          isLoading && (
            <>
              <LoadingAnimation strategy='background' controls={background.controls} />
              {/* <LoadingAnimation strategy={animationStrategy} controls={route.controls} /> */}
              <AnimationComponent controls={controls} />
            </>
          )
        }
        {children}
      </AnimatePresence>
    </MountingLoadingContext.Provider>
  )
}


