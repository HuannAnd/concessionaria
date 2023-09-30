'use client';

import styles from './style.module.scss'

import Cta from '@/components/Cta';
import DisplayItemsHorizontal from '@/components/DisplayItemsHorizontal';

import CarsService from '@/services/cars'

import useRedirectWithLoading from '@/hooks/useRedirectWithLoading';
interface ExecutiveProps { }

export default function Large({ }: ExecutiveProps) {
  const mountingLoading = useRedirectWithLoading()

  const cars = CarsService.getAllModels("large")

  return (
    <section className={styles.Large}>
      <strong className={styles.recovery}>2023</strong>
      <h2 className={styles.subtitle}>Large</h2>
      <DisplayItemsHorizontal maxScaleY={1.2}>
        {cars.map(((x, i) => <div key={`large_${i}`} className={styles.item}>
          <img className={styles.carImage} src={x.url!} alt="Car image" />
        </div>))}
      </DisplayItemsHorizontal>
      <p className={styles.explain}>
        Executive Wheels™ - All rights reserved. This copyright covers the exclusive design, features, and innovative technologies embodied in our line of executive automobiles. Unauthorized reproduction, distribution, or imitation of these distinctive vehicles, including their sleek aesthetics, cutting-edge interior functionalities, and top-tier performance, is strictly prohibited. This copyright extends to all visual, textual, and conceptual elements associated with Executive Wheels™, safeguarding our commitment to delivering unparalleled sophistication and driving experiences to our esteemed clientele. Legal action will be pursued against any infringements upon this intellectual property.
      </p>
      <Cta action={() => mountingLoading("/models/large", "letters", { innerText: "Large" })} className={styles.cta} hrLinePos='right'>Get Large</Cta>
    </section>
  )
}