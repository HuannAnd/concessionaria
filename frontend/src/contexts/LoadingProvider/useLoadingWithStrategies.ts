import { useCallback, useEffect } from 'react'


import { usePathname, useRouter } from 'next/navigation'

import { ANIMATION_DURATION_IN_MS } from './index'

import useLenisScroll from '@/hooks/useLenisScroll';
import { Strategy } from './components/type';


interface IStrategie {
  slideIn(): Promise<void>
  slideOut(): Promise<void>
}

export default function useLoadingWithStrategies(
  ...strategies: (Strategy<"letters"> | Strategy<"dots"> | Strategy<"background">)[]
): (href: string) => Promise<void> {
  const lenis = useLenisScroll()

  const router = useRouter()
  const pathname = usePathname()

  const startLoadingTransitionTo = useCallback(async (href: string) => {
    strategies.forEach(async (strategy, i) => {
      await strategy.slideIn()

      const isBackgroundAnimation = strategy.animation === "background"

      if (isBackgroundAnimation) {
        router.push(href)
      }
    })

    document.body.style.cursor = "wait"
  }, [...strategies])

  async function umountingLoading() {
    lenis.scrollTo(0, { immediate: true, })
    for (let i = strategies.length - 1; i >= 0; i--) {
      await strategies[i].slideOut()
      if (i === 0) {
        document.body.style.cursor = "default"
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      umountingLoading()
    }, ANIMATION_DURATION_IN_MS)
  }, [pathname])

  return startLoadingTransitionTo
}