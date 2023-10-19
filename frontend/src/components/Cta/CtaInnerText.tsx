'use client';

interface CtaInnerTextProps
  extends React.HTMLAttributes<HTMLDivElement> { }

import styles from './CtaInnerText.module.scss'

export default function CtaInnerText({ className, ...rest }: CtaInnerTextProps) {
  return (
    <div {...rest} className={`${styles.BaseInnerText} ${className}`} />
  )
}