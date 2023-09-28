import { Variants } from 'framer-motion'

export const largeText: Variants = {
  open: {},
};

export const smallText = {
  appear: {},

};

export const slideUp: Variants = {
  appear: (i: number) => ({ y: "0%", opacity: 1, transition: { duration: .5, delay: i * 0.01 } }),
  initial: { y: "-100%", opacity: 0, transition: { duration: .5 } }
}

export const label: Variants = {
  appear: { x: "-100%", opacity: 1, transition: { duration: .3, delay: .2 } },
  desappear: { x: "0%", opacity: 0 }

}