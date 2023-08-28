import { Variants } from "framer-motion";

export const clockerCircle: Variants = {
  disabled: { pathLength: 0, transition: { duration: 0 } },
  clocking: (time: number) => ({ pathLength: 1, transition: { duration: time } })
}