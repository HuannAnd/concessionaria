import Hero from "./_layouts/Hero"
import Benefits from "@/app/cars/_layouts/Benefits"
import Vehicle from "./_layouts/Vehicle"

import styles from './page.module.scss'

import { Country } from "./_services/price/type"

export default async function LargePage() {

  return (
    <main>
      <Hero />
      <div className={styles.recovery}>
        <div className={styles.right}></div>
      </div>
      <Benefits />
      <Vehicle brand="Kia" imageUrl="/cars/large/1.jpg" model="Seltos" price={100000} discount={50} strategy={Country.BRAZIL} />
      <Vehicle brand="Mercedes Benz" imageUrl="/cars/large/2.jpg" model="G-Class" price={78000} discount={37} strategy={Country.INDIA} />
      <Vehicle brand="BMW" imageUrl="/cars/large/3.jpg" model="X5" price={240000} discount={18} strategy={Country.INDIA} />
    </main>
  )
}