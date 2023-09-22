'use client';

import { HTMLAttributes } from 'react';
import Link from 'next/link';

import styles from './style.module.scss'
import usePrepareToView from '@/hooks/useRedirectWithLoading';

interface CtaProps
  extends HTMLAttributes<HTMLDivElement> { hrLinePos?: "left" | "right"; action: () => void }

export default function Cta({ children, className, hrLinePos = "left", action, ...rest }: CtaProps) {
  const mountingLoadingTo = usePrepareToView()

  return (
    <div {...rest} className={`${styles.cta} ${className}`}>
      <div style={{ order: hrLinePos === "left" ? "0" : "1" }} className={styles.innerline} />
      <a onClick={() => action()} className={styles.innerText}>{children}</a>
    </div>
  )
}