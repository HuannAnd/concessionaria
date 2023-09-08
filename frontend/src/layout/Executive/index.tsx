'use client';

import styles from './style.module.scss'

import Cta from '@/components/Cta';
import DisplayItemsHorizontal from '@/components/DisplayItemsHorizontal';
interface ExecutiveProps {

}

export default function Executive({ }: ExecutiveProps) {
  return (
    <section className={styles.Large}>
      <strong className={styles.recovery}>2022</strong>
      <h2 className={styles.subtitle}>Executive</h2>
      <DisplayItemsHorizontal maxScaleY={1.2}>
        <div className={styles.item}>
          <img className={styles.carImage} src="/cars/1.png" alt="Car image" />
        </div>
        <div className={styles.item}>
          <img className={styles.carImage} src="/cars/2.png" alt="Car image" />
        </div>
        <div className={styles.item}>
          <img className={styles.carImage} src="/cars/3.png" alt="Car image" />
        </div>
        <div className={styles.item}>
          <img className={styles.carImage} src="/cars/4.png" alt="Car image" />
        </div>
        <div className={styles.item}>
          <img className={styles.carImage} src="/cars/5.png" alt="Car image" />
        </div>
        <div className={styles.item}>
          <img className={styles.carImage} src="/cars/6.png" alt="Car image" />
        </div>
      </DisplayItemsHorizontal>
      <p className={styles.explain}>
        Executive Wheels™ - All rights reserved. This copyright covers the exclusive design, features, and innovative technologies embodied in our line of executive automobiles. Unauthorized reproduction, distribution, or imitation of these distinctive vehicles, including their sleek aesthetics, cutting-edge interior functionalities, and top-tier performance, is strictly prohibited. This copyright extends to all visual, textual, and conceptual elements associated with Executive Wheels™, safeguarding our commitment to delivering unparalleled sophistication and driving experiences to our esteemed clientele. Legal action will be pursued against any infringements upon this intellectual property.
      </p>
      <Cta href='/cars/executive' className={styles.cta} hrLinePos='left'>Get Executive</Cta>
    </section>
  )
}