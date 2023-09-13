import { useCallback, useEffect, useState } from 'react'


import { useRouter } from 'next/navigation'

import { AnimationControls, useAnimationControls } from 'framer-motion';

import { ANIMATION_DURATION_IN_MS } from './index'

import useLenisScroll from '@/hooks/useLenisScroll';
import { BaseLoadingStrategy } from './strategies/BaseLoadingStrategy';

interface IBaseStrategy {
  controls: AnimationControls;
  strategy: BaseLoadingStrategy;
}

export default function useLoading(pathname: string, background: IBaseStrategy, strategy: IBaseStrategy) {
  const [isLoading, setIsLoading] = useState(true)
  const lenis = useLenisScroll()
  const router = useRouter()

  const unmountingLoading = useCallback(async () => {
    await strategy.strategy.endAnimation(strategy.controls)
    await background.strategy.endAnimation(background.controls)

    document.body.style.cursor = "default"
    lenis.scrollTo(0, { immediate: true, })
  }, [lenis])

  async function mountingLoading(url: string) {
    await background.strategy.openAnimation(background.controls)
    await strategy.strategy.openAnimation(strategy.controls)


    document.body.style.cursor = "wait"
    router.push(url)
  }


  useEffect(() => {
    setTimeout(() => {
      unmountingLoading()
    }, ANIMATION_DURATION_IN_MS)
  }, [pathname])

  return { mountingLoading, isLoading }
}