"use client"

import styles from './style.module.scss'

import DotListeer from '@/components/Listener'
import Letters from '@/components/Letters'

import useAnimationScrollerRef from './useScrollAnimationRef'


export default function About() {
  const image = useAnimationScrollerRef()

  return (
    <section id='about' data-section-alias="About" className={styles.About}>
      <article className={styles.left}>
        <h2 className={styles.subtitle}>Confortable and Viabiliaty, Here</h2>
        <Letters>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis quibusdam qui.Veritatis ab dolorum cupiditate vero sapiente libero omnis?
        </Letters>
        <small className={styles.addon}>In our presentation, please note that the images in the slideshow are not our own; they've been sourced from external content</small>
      </article>
      <article className={styles.right}>
        <div className={styles.recovery}>

        </div>
        <div className={styles.carousel}>
          <img ref={image} className={styles.image} src="/slide-car.png" alt="Base car image" />
        </div>
        {/* <DotListeer.Options className={styles.optioner}>
          <DotListeer.Dot order={0} />
          <DotListeer.Dot order={1} />
          <DotListeer.Dot order={2} />
          <DotListeer.Dot order={3} />
        </DotListeer.Options> */}
      </article>
    </section>
  )
}