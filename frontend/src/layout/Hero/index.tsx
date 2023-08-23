'use client';

import styles from './style.module.scss'

interface HeroProps {

}

export default function Hero({ }: HeroProps) {
  return (
    <section className={styles.Hero}>
      <div className={styles.container}>
        <div>
          <h1>Explore</h1>
          <button>Learn more</button>
          <div className={styles.carouselDots}>
            <div>
              <small>1</small>
            </div>
            <div>
              <small>2</small>
            </div>
            <div>
              <small>3</small>
            </div>
            <div>
              <small>3</small>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}