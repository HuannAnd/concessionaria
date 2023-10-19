import { Variants } from "framer-motion";

export const slideUp: Variants = {
  appear: (i: number) => ({ y: "0%", opacity: 1, transition: { duration: .5, delay: i * 0.01 } }),
  initial: { y: "-100%", opacity: 0, transition: { duration: .5 } }
}