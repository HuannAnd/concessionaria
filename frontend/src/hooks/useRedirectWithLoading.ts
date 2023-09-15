import { useContext } from "react"

import { MountingLoadingContext } from '@/contexts/LoadingProvider'

export default function useRedirectWithLoading() {
  return useContext(MountingLoadingContext)
}