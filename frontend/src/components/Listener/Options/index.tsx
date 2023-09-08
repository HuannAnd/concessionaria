'use client';

import { useRef } from 'react';

import DotOrderProvider from './Provider'

interface OptionsProps
  extends React.HTMLAttributes<HTMLDivElement> { timerToResolveInMs?: number }

export default function Options({ children, timerToResolveInMs = 10000, ...rest }: OptionsProps) {
  const ref = useRef<HTMLDivElement>(null!);
  const quantity = ref.current?.children.length

  return (
    <DotOrderProvider quantity={quantity} timerToResolveInMs={timerToResolveInMs}>
      <div {...rest} ref={ref}>
        {children}
      </div>
    </DotOrderProvider>
  )
}