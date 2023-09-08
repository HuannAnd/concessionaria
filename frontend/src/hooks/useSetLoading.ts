import { useContext } from 'react'

import { LoadingContext } from '@/contexts/LoadingProvider'

export default function useSetLoad() {
  return useContext(LoadingContext)
}