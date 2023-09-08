'use client';

import { createContext, useCallback, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import Preloader from '@/layout/Preloader';

import { AnimatePresence } from 'framer-motion';
import useLenisScroll from '@/hooks/useLenisScroll';

interface LoadingProviderProps {
  children: React.ReactNode
}

export const LoadingContext = createContext<(isLoading: boolean) => void>(() => { })
const ANIMATION_DURATION_IN_MS = 3000
export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setLoad] = useState(true)

  const lenis = useLenisScroll()
  const pathname = usePathname();

  useEffect(() => {
    function initLoading() {
      setLoad(true)
      lenis.scrollTo(0, { immediate: true, })
      document.body.style.cursor = "wait";
    }

    const cancellingLoading = () => setTimeout(() => {
      setLoad(false)
      document.body.style.cursor = "default";

    }, ANIMATION_DURATION_IN_MS)

    initLoading()
    cancellingLoading()

  },
    [pathname]
  )

  const newSetLoad = useCallback((isLoading: boolean) => setLoad(isLoading), [])

  return (
    <LoadingContext.Provider value={newSetLoad}>
      <AnimatePresence mode='wait'>
        {
          isLoading && <Preloader />
        }
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  )
}