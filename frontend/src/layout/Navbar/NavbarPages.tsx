'use client';

import { useMemo } from 'react';
import Link from 'next/link';

import styles from './NavbarPages.module.scss'

import useScrollDirection from './useScrollDirection';
import { usePathname, useRouter } from 'next/navigation';
import useRedirectWithLoading from '@/hooks/useRedirectWithLoading'
import { ScrollDirections } from './type';
import useAvailablePages from './useAvailablePages';


interface NavbarNormalProps { }



export default function NavbarPages({ }: NavbarNormalProps) {
  const scrollDirection = useScrollDirection()
  const availablePages = useAvailablePages()
  const redirectWithLoading = useRedirectWithLoading()

  const canBeShow = scrollDirection === ScrollDirections.TO_TOP

  return (
    <nav className={styles.NavbarPages} data-can-be-show={canBeShow}>
      <div className={styles.content}>
        <img className={styles.brand} src="/nav-brand.png" alt="Brand logo" />
        {availablePages.map(x => <a className={styles.navLink} onClick={() => redirectWithLoading(x.path, "dots", { amount: 3 })} >{x.alias}</a>)}
      </div>
    </nav>
  )
}