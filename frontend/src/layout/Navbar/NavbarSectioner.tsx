'use client';

import styles from './NavbarSectioner.module.scss'

import useLenisScroll from '@/hooks/useLenisScroll';
import useScrollDirection from './useScrollDirection';
import useSections from './useSections';
import { ScrollDirections } from './type';


interface NavbarSectionerProps { }

export default function NavbarSectioner({ }: NavbarSectionerProps) {
  const scrollDirection = useScrollDirection()
  const lenis = useLenisScroll()
  const sections = useSections()

  const isAvailable = sections?.length! > 0 && scrollDirection === ScrollDirections.TO_BOTTOM;

  return (
    <nav className={styles.NavbarSectioner} data-can-be-show={isAvailable}>
      <div className={styles.content}>
        {sections?.map(x => <a className={styles.navLink} onClick={() => lenis.scrollTo(`[data-section-alias='${x}']`)}>{x}</a>)}
      </div>
    </nav>
  )
}
