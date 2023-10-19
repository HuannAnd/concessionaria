import { useContext } from 'react'
import { NavigationCarModelContext } from '@/contexts/NavigationProvider'

export default function useCarOnVision() {
  return useContext(NavigationCarModelContext)
}