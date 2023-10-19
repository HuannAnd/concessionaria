'use client';

import { useEffect, useRef } from 'react';

import styles from './style.module.scss'

import { motion, useInView, useScroll, useTransform } from 'framer-motion';

import Orquetrator from '../../_services/price';
import Cta from '@/components/Cta';

import { Power3 } from 'gsap';

import useRedirectWithLoading from '@/hooks/useRedirectWithLoading';
import { usePathname } from 'next/navigation';
import useCarOnVision from '@/layout/Navbar/useCarOnVision';
import useSetCarOnVision from './useSetCarOnVision';

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
  // console.log("pathname value: ", pathname)

  const Strategy = new Orquetrator(price, discount).getStrategy(strategy)!
  const ref = useRef<HTMLDivElement>(null!)
  const mountLoading = useRedirectWithLoading()

  const isInView = useInView(ref, { margin: "-50%" })
  const setCarOnVision = useSetCarOnVision()

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, .65], { clamp: false, ease: Power3.easeInOut })

  useEffect(() => {
    if (isInView) {
      setCarOnVision(model)
    }
  }, [isInView])

  console.log("Vehicle ", model, "are on view")
  

  return (
    <section ref={ref} data-model={model} data-scroll-is-visible={isInView} className={styles.Vehicle}>
      <img className={styles.background} alt='background' src={imageUrl} />
      <motion.div className={styles.fumeBackground} style={{ opacity }} />
      <div className={styles.wrapper}>
        <strong className={styles.model}>{model}</strong>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.info}>
              <p className={styles.make}>{brand}</p>
              <small className={styles.slogan}>Best Experience</small>
            </div>
            <div className={styles.price}>
              <p>{Strategy.getPrice()}</p>
              <small className={styles.priceWithoutDiscount}>{Strategy.getDiscount()}</small>
            </div>
          </div>
          <Cta.Root className={styles.cta}>
            <Cta.HrLine />
            <Cta.InnerText onClick={() => mountLoading(`/cars/${12}`, "dots", { amount: 3 })}>Buy Now</Cta.InnerText>
          </Cta.Root>
        </div>
      </div>
    </section>
  )
}