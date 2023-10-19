'use client';

import Cta from '@/components/Cta';


import styles from './style.module.scss'
import { useLayoutEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import useCarOnVision from '@/layout/Navbar/useCarOnVision';
import useSetCarOnVision from '../Vehicle/useSetCarOnVision';

interface BenefitsProps { }

export default function Benefits({ }: BenefitsProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { margin: "-50%" })
  const setCarOnVision = useSetCarOnVision()
  useLayoutEffect(() => {
    if (isInView) {
      setCarOnVision(null)
    }
  }, [isInView])

  return (
    <section ref={ref} data-section-alias="Benefits" className={styles.Benefits}>
      <h2 className={styles.title}>benefits of buy our products</h2>
      <article className={`${styles.col3} ${styles.heightMinViewport}`}>
        <div className={styles.benefit}>
          <div className={styles.label}>
            <small className={styles.order}>01.</small>
            <span className={styles.own}>Ecclusive Service For You</span>
          </div>
          <p className={styles.description}>Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You</p>
          <Cta.Root className={styles.cta} >
            <Cta.HrLine />
            <Cta.InnerText onClick={() => { }}>Know More</Cta.InnerText>
          </Cta.Root>
        </div>
        <div className={styles.benefit}>
          <div className={styles.label}>
            <small className={styles.order}>02.</small>
            <span className={styles.own}>Ecclusive Service For You</span>
          </div>
          <p className={styles.description}>Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You</p>
          <Cta.Root className={styles.cta} >
            <Cta.HrLine />
            <Cta.InnerText onClick={() => { }}>Know More</Cta.InnerText>
          </Cta.Root>
        </div>
        <div className={styles.benefit}>
          <div className={styles.label}>
            <small className={styles.order}>03.</small>
            <span className={styles.own}>Ecclusive Service For You</span>
          </div>
          <p className={styles.description}>Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You</p>
          <Cta.Root className={styles.cta} >
            <Cta.HrLine />
            <Cta.InnerText onClick={() => { }}>Know More</Cta.InnerText>
          </Cta.Root>
        </div>
      </article>
      <p className={styles.addon}>
        In many instances, projects and demonstrations are designed not only to highlight the benefits but also to showcase skills. The apparent benefits or advantages presented in such cases may not always reflect real-world outcomes. Instead, they serve as a demonstration of capabilities and expertise.

        This is particularly common in various fields, including technology, design, and marketing, where individuals or teams create projects to exhibit their proficiency. The emphasis here lies in demonstrating what is possible rather than claiming that these benefits have already been fully realized.

        In such cases, it is essential to recognize that the displayed benefits are more of a 'proof of concept' or a demonstration of potential rather than concrete, real-world results. This distinction is crucial to manage expectations and understand the primary purpose behind the presentation of these benefits.

        Therefore, while the benefits portrayed may be enticing and promising, it's important to remember that the true achievement lies in the skills and capabilities demonstrated in the project, serving as an inspiration for what can be accomplished.
      </p>
    </section>
  )
}