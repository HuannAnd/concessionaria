'use client';

import DotsListener from '@/components/Listener';
import CustomButton from '@/components/CustomButton';


import styles from './style.module.scss'

interface HeroProps {

}

export default function Hero({ }: HeroProps) {
  return (
    <section className={styles.Hero}>
      <div className={styles.wrapper}>
        {/* <div className={styles.mainContainer}> */}
          <h1 className={styles.title}>Explore</h1>
          <div className={styles.bottom}>
            <article className={styles.info}>
              <p>Takoma</p>
              <small className={styles.description}>The Latest Machine Reborn</small>
            </article>
            <CustomButton className={styles.learnMore} variant='inverted'>Learn more</CustomButton>
          </div>
          {/* <DotsListener.Options timerToResolveInMs={30000} className={styles.optioner}>
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={0} />
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={1} />
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={2} />
            <DotsListener.Dot withLabel dotW={40} radius={20} className={styles.dot} order={3} />
          </DotsListener.Options> */}
        {/* </div> */}
      </div>
    </section>
  )
}