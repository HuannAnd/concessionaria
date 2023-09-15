import { useContext } from 'react'

import { LoadingContext } from './index'

export default function useisLoading() {
  return useContext(LoadingContext)
}