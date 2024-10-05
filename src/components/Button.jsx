import React from 'react'

const Button = (props) => {
    return (
        <button type="button" onClick={props?.onClick} className={`
            tw-px-3
            tw-py-1
            ${props?.varient === 'light' && 'tw-bg-[#3A3A3A] hover:tw-bg-[#2e2e2e]'}
            ${props?.varient === 'dark' && 'tw-bg-[#3A3A3A] hover:tw-bg-[#2e2e2e]'}
            ${props?.varient === 'blue' && 'tw-bg-[#404DC1] hover:tw-bg-[#35409f]'}
            ${props?.varient === 'red' && 'tw-bg-[#B83131] hover:tw-bg-[#9c2929]'}
            hover:tw-transition-all
            tw-transition-all
            tw-font-medium
            tw-drop-shadow-md
            tw-rounded-sm
            tw-text-white
            tw-tracking-wide
        `}>
            {props?.name}
        </button>
    )
}

export default Button