import { useEffect, useRef, useState } from "react";

import { ScrollDirections } from './type'

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirections>(ScrollDirections.TO_BOTTOM)
  const lastScrollY = useRef(0);
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDirection(ScrollDirections.TO_BOTTOM)
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection(ScrollDirections.TO_TOP)
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return scrollDirection
}