'use client';

interface CtaHrLineProps
  extends React.HTMLAttributes<HTMLDivElement> { }

import styles from './CtaHrLine.module.scss'

export default function CtaHrLine({ className, ...rest }: CtaHrLineProps) {
  return (
    <div {...rest} className={`${styles.BaseCtaHrLine} ${className}`} />
  )
}