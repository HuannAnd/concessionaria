'use client';

import { useSearchParams } from 'next/navigation';

import styles from './style.module.scss'

import GreenLine from '../../_components/GreenLine';

interface CarouselProps { }

export default function Carousel({ }: CarouselProps) {
  const searchParams = useSearchParams()
  const color = searchParams.get("color")

  const leftRectColor = ""

  return (
    <section className={styles.Carousel}>
      <div className={styles.leftRect}></div>
      <article className={styles.action}>
        <GreenLine />
      </article>
      <h2 className={styles.type}>OutBack</h2>
      <p className={styles.price}>$78.812</p>
      <div className={styles.rightRect}></div>
    </section>
  )
}