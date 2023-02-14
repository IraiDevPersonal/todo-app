import { useState, ChangeEvent, useLayoutEffect } from 'react'
import {
   DARK_CLASS,
   DOCUMENT_ELEMENT_CLASSLIST,
   HTML_FOR_ID,
   LIGHT_CLASS,
} from '../../utils/constants'
import moon from '../../assets/svg/moon.svg'
import sun from '../../assets/svg/sun.svg'

export function DarkModeToggler() {
   const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false)

   const handleToggleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked
      setIsDarkModeActive(checked)
      DOCUMENT_ELEMENT_CLASSLIST.toggle(DARK_CLASS)
         ? (localStorage.theme = DARK_CLASS)
         : (localStorage.theme = LIGHT_CLASS)
   }

   useLayoutEffect(() => {
      const isDarkActive =
         localStorage.theme === 'dark' ||
         (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

      isDarkActive
         ? DOCUMENT_ELEMENT_CLASSLIST.add(DARK_CLASS)
         : DOCUMENT_ELEMENT_CLASSLIST.remove(DARK_CLASS)
      setIsDarkModeActive(isDarkActive)
   }, [])

   return (
      <label
         htmlFor={HTML_FOR_ID}
         className="cursor-pointer"
         title={`Modo ${isDarkModeActive ? 'oscuro' : 'claro'}`}
      >
         <input
            hidden
            type="checkbox"
            id={HTML_FOR_ID}
            checked={isDarkModeActive}
            onChange={handleToggleDarkMode}
         />
         <span className="cursor-pointer">
            <img
               className="h-7 w-auto"
               src={isDarkModeActive ? moon : sun}
               alt={`${isDarkModeActive ? 'moon' : 'sun'}-image-reference`}
            />
         </span>
      </label>
   )
}
