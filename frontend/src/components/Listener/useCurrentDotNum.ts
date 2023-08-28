import { useContext } from "react";

import { DotOrderContext } from './Options/Provider'

export default function useCurrentDotNum() {
  return useContext(DotOrderContext)
}