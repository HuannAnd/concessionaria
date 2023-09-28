"use client"

import { motion, useInView } from 'framer-motion'

import styles from './style.module.scss'
import { useLayoutEffect, useRef } from 'react'

import { Power3, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import DotListeer from '@/components/Listener'
import Cta from '@/components/Cta'

import { slideUp } from './anim'


export default function About() {
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis quibusdam qui.Veritatis ab dolorum cupiditate vero sapiente libero omnis?"
  const image = useRef<HTMLImageElement>(null!)
  const description = useRef<HTMLDivElement>(null!)
  const isInView = useInView(description, { once: true })
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: window.innerHeight / 2,
        end: "+=2000px",
        // markers: true,
        scrub: true
      }
    })

    timeline
      .to(image.current, { clipPath: "inset(15%)" })
  }, [])

  return (
    <section id='about' className={styles.About}>
      <article className={styles.left}>
        <h2 className={styles.subtitle}>Confortable and Viabiliaty, Here</h2>
        <motion.p className={styles.description} ref={description}>
          {text.split(" ").map(((phrase, index) => <span className={styles.spanLine}><motion.span className={styles.spanLineInner} variants={slideUp} initial="initial" custom={index} animate={isInView ? "appear" : "initial"} transition={{ duration: 1 }} key={`w_${index}`}>{phrase}</motion.span></span>))}
        </motion.p>
        {/* <Cta href=''>Learn More</Cta> */}
      </article>
      <article className={styles.right}>
        <div className={styles.carousel}>
          <img ref={image} className={styles.image} src="/slide-car.png" alt="" />
        </div>
        <DotListeer.Options className={styles.optioner}>
          <DotListeer.Dot order={0} />
          <DotListeer.Dot order={1} />
          <DotListeer.Dot order={2} />
          <DotListeer.Dot order={3} />
        </DotListeer.Options>
      </article>
    </section>
  )
}