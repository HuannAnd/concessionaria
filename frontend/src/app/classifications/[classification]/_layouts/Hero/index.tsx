'use client';

import Image from 'next/image';

import styles from './style.module.scss'

interface HeroProps { }

export default function Hero({ }: HeroProps) {
  return (
    <section className={styles.Hero}>
      <div className={styles.container}>
        <img className={styles.background} alt='background' src="/cars/large.jpg" />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Large</h1>
        </div>
      </div>
    </section>
  )
}