import { useContext } from "react";

import { DurationToEachDotInMsContext } from './Options/Provider'

export default function useDurationToEachDot() {
  return useContext(DurationToEachDotInMsContext)
}