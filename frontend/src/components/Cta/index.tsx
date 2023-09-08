'use client';

import { HTMLAttributes } from 'react';
import Link from 'next/link';

import styles from './style.module.scss'

interface CtaProps
  extends HTMLAttributes<HTMLDivElement> { hrLinePos?: "left" | "right"; href: string }

export default function Cta({ children, className, href, hrLinePos = "left", ...rest }: CtaProps) {


  return (
    <div {...rest} className={`${styles.cta} ${className}`}>
      <div style={{ order: hrLinePos === "left" ? "0" : "1" }} className={styles.innerline} />
      <Link href={href} className={styles.innerText}>{children}</Link>
    </div>
  )
}