import { useState, ChangeEvent } from 'react'
import {
   DARK_CLASS,
   DARK_MODE_INIT_STATE,
   HTML_ELEMENT,
   HTML_FOR_ID,
} from '../../utils/constants'
import moon from '../../assets/svg/moon.svg'
import sun from '../../assets/svg/sun.svg'

export function DarkModeToggler() {
   const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(DARK_MODE_INIT_STATE)

   const handleToggleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked
      setIsDarkModeActive(checked)
      HTML_ELEMENT?.classList.toggle(DARK_CLASS)
   }

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
