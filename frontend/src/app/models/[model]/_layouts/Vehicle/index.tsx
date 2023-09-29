'use client';

import { useRef } from 'react';

import styles from './style.module.scss'

import { motion, useScroll, useTransform } from 'framer-motion';

import Orquetrator from '../../_services/price';
import Cta from '@/components/Cta';

import { Power3 } from 'gsap';

import useRedirectWithLoading from '@/hooks/useRedirectWithLoading';
import { usePathname } from 'next/navigation';

interface VehicleProps {
  brand: string,
  model: string,
  discount: number,
  price: number
  strategy: string
  imageUrl: string
}

export default function Vehicle({ brand, model, strategy, price, discount, imageUrl }: VehicleProps) {
  const pathname = usePathname()
  console.log("pathname value: ", pathname)

  const Strategy = new Orquetrator(price, discount).getStrategy(strategy)!
  const ref = useRef<HTMLDivElement>(null!)
  const mountLoading = useRedirectWithLoading()

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, .65], { clamp: false, ease: Power3.easeInOut })


  return (
    <section ref={ref} className={styles.Vehicle}>
      <img className={styles.background} alt='background' src={imageUrl} />
      <motion.div className={styles.fumeBackground} style={{ opacity }} />
      <div className={styles.wrapper}>
        <h2 className={styles.brand}>{brand}</h2>
        <strong className={styles.model}>{model}</strong>
        <div className={styles.bottom}>
          <p className={styles.price}>{Strategy.getPrice()}</p>
          <Cta className={styles.cta} action={() => mountLoading(`${pathname}/${12}`, "dots", { amount: 3 })}>Buy Now</Cta>
        </div>
      </div>
    </section>
  )
}