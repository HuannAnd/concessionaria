'use client';

import { HTMLAttributes } from 'react';
import styles from './style.module.scss'

interface CtaProps
  extends HTMLAttributes<HTMLDivElement> { hrLinePos?: "left" | "right" }

export default function Cta({ children, className, hrLinePos = "left", ...rest }: CtaProps) {
  
  
  return (
    <div {...rest} className={`${styles.cta} ${className}`}>
      <div style={{order: hrLinePos === "left" ? "0" : "1"}} className={styles.innerline} />
      <button className={styles.innerText}>{children}</button>
    </div>
  )
}