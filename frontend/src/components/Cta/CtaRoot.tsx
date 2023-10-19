'use client';

interface CtaRootProps
  extends React.HTMLAttributes<HTMLDivElement> { }

import styles from './CtaRoot.module.scss'

export default function CtaRoot({ className, children, ...rest }: CtaRootProps) {
  return (
    <div {...rest} className={`${styles.BaseCtaRoot} ${className}`}>
      {children}
    </div>
  )
}