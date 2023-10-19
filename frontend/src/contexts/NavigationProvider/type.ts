import { ICarData } from '@/services/cars/type'

import { Dispatch, SetStateAction } from 'react'

export type NavigationCarModelContextValue = ICarData["brand"] | null
export type NavigationSetCarModelContextValue = Dispatch<SetStateAction<NavigationCarModelContextValue>>  
