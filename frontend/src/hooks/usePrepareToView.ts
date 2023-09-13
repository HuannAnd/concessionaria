import { useContext } from "react"

import { MountingLoadingContext } from '@/contexts/LoadingProvider'

export default function usePrepareToView() {
  return useContext(MountingLoadingContext)
}