'use client';

import { createContext, useEffect, useState } from 'react'

import Lenis from '@studio-freight/lenis'

interface LenisScrollProviderProps {
  children: React.ReactNode
}

interface Value {

}

export const LenisScrollContext = createContext({} as Lenis)

export default function LenisScrollProvider({ children }: LenisScrollProviderProps) {
  const [lenis] = useState(new Lenis())
  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      cancelAnimationFrame(raf as any);
    };
  }, []);

  return (
    <LenisScrollContext.Provider value={lenis}>
      {children}
    </LenisScrollContext.Provider>
  )
}