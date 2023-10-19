'use client';

import { createContext, useState, useLayoutEffect } from 'react'

import {
  NavigationCarModelContextValue,
  NavigationSetCarModelContextValue
} from './type'

import { ICarData } from '@/services/cars/type'
import { useRouter } from 'next/navigation';

interface NavigationProviderProps {
  children: React.ReactNode
}

export const NavigationCarModelContext = createContext({} as NavigationCarModelContextValue)
export const NavigationSetCarModelContext = createContext({} as NavigationSetCarModelContextValue)

export default function NavigationProvider({ children }: NavigationProviderProps) {
  const [model, setModel] = useState<NavigationCarModelContextValue>(null)
  const router = useRouter()

  useLayoutEffect(() => {
    router.push("/home")
  }, [])

  return (
    <NavigationCarModelContext.Provider value={model}>
      <NavigationSetCarModelContext.Provider value={setModel}>
        {children}
      </NavigationSetCarModelContext.Provider>
    </NavigationCarModelContext.Provider>
  )
}