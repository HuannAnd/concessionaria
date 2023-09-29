'use client';

import Cta from '@/components/Cta';
import styles from './style.module.scss'

interface BenefitsProps {

}

export default function Benefits({ }: BenefitsProps) {
  return (
    <section className={styles.Benefits}>
      <h2 className={styles.title}>benefits of buy our products</h2>
      <article className={`${styles.col3} ${styles.heightMinViewport}`}>
        <div className={styles.benefit}>
          <div className={styles.label}>
            <small className={styles.order}>01.</small>
            <span className={styles.own}>Ecclusive Service For You</span>
          </div>
          <p className={styles.description}>Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You</p>
          <Cta className={styles.cta} action={() => { }} >Know More</Cta>
        </div>
        <div className={styles.benefit}>
          <div className={styles.label}>
            <small className={styles.order}>02.</small>
            <span className={styles.own}>Ecclusive Service For You</span>
          </div>
          <p className={styles.description}>Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You</p>
          <Cta className={styles.cta} action={() => { }} >Know More</Cta>
        </div>
        <div className={styles.benefit}>
          <div className={styles.label}>
            <small className={styles.order}>03.</small>
            <span className={styles.own}>Ecclusive Service For You</span>
          </div>
          <p className={styles.description}>Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You Ecclusive Service For You</p>
          <Cta className={styles.cta} action={() => { }} >Know More</Cta>
        </div>
      </article>
    </section>
  )
}