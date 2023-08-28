'use client';

import { createContext, useEffect, useLayoutEffect, useState } from 'react'

interface DotOrderProviderProps {
  children: React.ReactNode,
  timerToResolveInMs: number,
  quantity: number
}

export const DotOrderContext = createContext<number>(undefined!)
export const DurationToEachDotInMsContext = createContext<number>(undefined!)

export default function DotOrderProvider({ children, timerToResolveInMs }: DotOrderProviderProps) {
  const [currentDot, setDot] = useState(0)
  const updateDotOrderAction = () => {
    console.log("updateDotOrderAction has fired")
    setDot(currentDot => (currentDot + 1) % 4)
  }

  useLayoutEffect(() => {
    console.log("useEffect stack")
    setInterval(() => {
      console.log("setInterval has fired")
      updateDotOrderAction()
    }, timerToResolveInMs)

    return () => {

    }
  }, [])

  console.log("currentDot change to: ", currentDot)

  return (
    <DotOrderContext.Provider value={currentDot}>
      <DurationToEachDotInMsContext.Provider value={timerToResolveInMs}>
        {children}
      </DurationToEachDotInMsContext.Provider>
    </DotOrderContext.Provider>
  )
}