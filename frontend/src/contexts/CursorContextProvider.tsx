'use client';

import { createContext } from 'react'
import CursorFollower from './CursorFollower';

interface CursorProviderProps {
  children: React.ReactNode
}

interface Value {

}

export const CursorContext = createContext({} as Value)

export default function CursorProvider({ children }: CursorProviderProps) {
  return (
    <CursorContext.Provider value={{}}>
      <CursorFollower />
      {children}
    </CursorContext.Provider>
  )
}