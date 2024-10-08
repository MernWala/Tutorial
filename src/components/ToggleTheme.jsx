import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from "react-icons/fa";

const ToggleTheme = (props) => {
  return (
    <button type='button' onClick={props.onClick} className={`
      ${props?.theme === 'dark' ?
        'tw-bg-[#3A3A3A] hover:tw-bg-[#2e2e2e] tw-text-white'
        :
        'tw-bg-[#d9d9d9] hover:tw-bg-[#d6d6d6] tw-text-[#333333]'
      }
      tw-p-3
      tw-rounded-r-full
      tw-transition-all
      tw-drop-shadow-sm
      hover:tw-transition-all
    `}>
      {props?.theme === 'dark' ?
        <FaSun size={35} />
        :
        <BsMoonStarsFill size={35} />
      }
    </button>
  )
}

export default ToggleTheme