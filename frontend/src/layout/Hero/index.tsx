'use client';

import DotsListener from '@/components/Listener';
import styles from './style.module.scss'

interface HeroProps {

}

export default function Hero({ }: HeroProps) {
  return (
    <section className={styles.Hero}>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Explore</h1>
          <button>Learn more</button>
          <DotsListener.Options timerToResolveInMs={30000} className={styles.optioner}>
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={0} />
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={1} />
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={2} />
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={3} />
          </DotsListener.Options>
        </div>
      </div>
    </section>
  )
}