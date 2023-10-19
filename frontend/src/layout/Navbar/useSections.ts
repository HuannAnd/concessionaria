import { useLayoutEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
export default function useSections() {
  const pathname = usePathname()
  const [sections, setSections] = useState<string[] | null>(null)

  useLayoutEffect(() => {
    function getSectionsNames(sections: HTMLCollectionOf<HTMLElement>) {
      const sectionsNames = [];

      for (let i = 0; i < sections.length; i++) {
        const section = sections.item(i)!;
        const sectionAliasName = section.dataset.sectionAlias!

        if (!sectionAliasName) continue;

        sectionsNames.push(sectionAliasName)
      }
      return sectionsNames
    }

    const sections = document.getElementsByTagName("section")
    const sectionsNames = getSectionsNames(sections)
    setSections(sectionsNames)

    console.log("All page sections: ", sections)
  }, [pathname])

  return sections
}