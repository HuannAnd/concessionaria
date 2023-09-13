'use client';

import { HTMLAttributes } from 'react';
import Link from 'next/link';

import styles from './style.module.scss'
import usePrepareToView from '@/hooks/usePrepareToView';

interface CtaProps
  extends HTMLAttributes<HTMLDivElement> { hrLinePos?: "left" | "right"; href: string }

export default function Cta({ children, className, href, hrLinePos = "left", ...rest }: CtaProps) {
  const prepareLoad = usePrepareToView()

  return (
    <div {...rest} className={`${styles.cta} ${className}`}>
      <div style={{ order: hrLinePos === "left" ? "0" : "1" }} className={styles.innerline} />
      <a onClick={() => prepareLoad(href)} className={styles.innerText}>{children}</a>
    </div>
  )
}