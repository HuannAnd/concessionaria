'use client';

import Cta from '@/components/Cta';

import styles from './style.module.scss'

import Orquetrator from '../../_services/price';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';

interface VehicleProps {
  brand: string,
  model: string,
  discount: number,
  price: number
  strategy: string
  imageUrl: string
}

export default function Vehicle({ brand, model, strategy, price, discount, imageUrl }: VehicleProps) {
  const Strategy = new Orquetrator(price, discount).getStrategy(strategy)!

  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        // start: "top 50%",
        end: "bottom 50%",
        onUpdate: () => {
            const scroll = ScrollTrigger.getById()?.progress()
        },

        markers: true,
        scrub: true

      }
    })

    timeline
      .to(ref.current, { opacity: 1 })
  }, [])
  // const { scrollYProgress } = useScroll({ container, offset: ["end start", "end end"] })
  // console.log("scrollYProgress: ", scrollYProgress)

  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Scroll pos has changed", latest)
  // })

  return (
    <section ref={ref} className={styles.Vehicle}>
      <img className={styles.background} alt='background' src={imageUrl} />
      <div className={styles.wrapper}>
        <h2 className={styles.brand}>{brand}</h2>
        <strong className={styles.model}>{model}</strong>
        <div className={styles.bottom}>
          <p className={styles.price}>{Strategy.getPrice()}</p>
          <Cta className={styles.cta} action={() => { }}>Buy Now</Cta>
        </div>
      </div>
    </section>
  )
}