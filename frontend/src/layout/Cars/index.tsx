import Cta from '@/components/Cta'
import styles from './style.module.scss'

import DisplayItemsHorizontal from '@/components/DisplayItemsHorizontal'

export default function Cars() {
  return (
    <section id='cars' className={styles.Cars}>
      <h2 className={styles.title}>CARS</h2>
      <div className={styles.text}>
        <p className={styles.innerTextUp}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi! Eaque sed odit similique obcaecati vitae perspiciatis quibusdam qui. Veritatis ab dolorum cupiditate vero sapiente libero omnis?
        </p>
        <small className={styles.innerTextDown}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium ipsa nam modi.</small>
      </div>
    </section>
  )
}