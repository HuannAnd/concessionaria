'use client';

import { createContext } from 'react'

import CookiesPopup from './CookiesPopup';

interface CookiesProviderProps {
  children: React.ReactNode
}

interface Value {

}

export const CookiesContext = createContext({} as Value)

export default function CookiesProvider({ children }: CookiesProviderProps) {
  return (
    <CookiesContext.Provider value={{}}>
      {/* <CookiesPopup /> */}
      {children}
    </CookiesContext.Provider>
  )
}