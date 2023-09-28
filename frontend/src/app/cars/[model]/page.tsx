import Hero from "./_layouts/Hero"
import Benefits from "./_layouts/Benefits"
import Vehicle from "./_layouts/Vehicle"

import styles from './page.module.scss'

import CarsService from './_services/cars'
import { Country } from "./_services/price/type"
import { ICarData } from './_services/cars/type'

type TParams = "model" | "cars"

export default async function CarsPage({
  params
}: {
  params: { [key in TParams]: key extends "model" ? ICarData["attach"] : string }
}) {
  const model = params.model
  const models = CarsService.getAllModels(model)


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