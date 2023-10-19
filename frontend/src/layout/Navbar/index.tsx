"use client";

import NavbarPages from './NavbarPages';
import NavbarSectioner from './NavbarSectioner';
import NavbarCarDisplay from './NavbarCars';


interface NavbarProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export default function Navbar({ }: NavbarProps) {
  return (
    <>
      <NavbarPages />
      <NavbarSectioner />
      <NavbarCarDisplay />  
    </>
  )
}