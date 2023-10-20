import Hero from "./_layouts/Hero"
import Benefits from "./_layouts/Benefits"
import Vehicle from "./_layouts/Vehicle"

import styles from './page.module.scss'

import CarsService from '@/services/cars'

import { Country } from "./_services/price/type"
import { ICarData } from '../../../services/cars/type'

type TParams = "classification" | "classifications"

export default async function CarsPage({
  params
}: {
  params: { [key in TParams]: key extends "classification" ? ICarData["attach"] : string }
}) {
  const classification = params.classification
  const models = await CarsService.getAllModelsByClassification(classification)

  console.log("models by CarsService: ", models)

  return (
    <main>
      <Hero />
      <Benefits />
      {models.map((car) => <Vehicle brand={car.brand} imageUrl={car.url!} model="X5" price={240000} discount={18} strategy={Country.INDIA} />)}
    </main>
  )
}