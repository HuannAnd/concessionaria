import { Variants } from 'framer-motion'

export const largeText: Variants = {
  open: {},
};

export const smallText = {
  appear: {},

};

export const label: Variants = {
  appear: { x: "-100%", opacity: 1, transition: { duration: .3, delay: .2 } },
  desappear: { x: "0%", opacity: 0 }

}