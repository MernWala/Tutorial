import React from 'react'

const Image = (props) => {
    const { className, ...restProps } = props
    return (
        <div>
            <img
                {...restProps}
                className={`
                    tw-rounded-sm 
                    tw-drop-shadow-sm 
                    ${className}
                `}
                src={props?.src}
                alt={props?.alt ?? ""}
            />
        </div>
    )
}

const Heading = (props) => {
    const { className, ...restProps } = props
    return (
        <div className='tw-my-2 tw-flex'>
            <span
                {...restProps}
                className={`
                    tw-text-xl 
                    tw-font-medium 
                    tw-inline-block 
                    tw-text-neutral-800 
                    tw-max-w-[300px] 
                    text-truncate 
                    ${className}
                `}
            >
                {props?.children}
            </span>
        </div>
    )
}

const Price = (props) => {
    const { className, ...restProps } = props
    return (
        <div className='tw-my-2'>
            <span
                {...restProps}
                className={`
                    tw-font-mono
                  tw-text-neutral-800
                    ${className}
                `}
            >
                {props?.children}
            </span>
        </div>
    )
}

const Description = (props) => {
    const { className, ...restProps } = props
    return (
        <div>
            <span
                {...restProps}
                className={`
                    tw-text-xs 
                    tw-inline-block 
                    tw-max-w-[300px] 
                    tw-text-justify 
                    ${className}
                `}
            >
                {props?.children}
            </span>
        </div>
    )
}

const CompoundComponent = (props) => {

    const { className, ...restProps } = props

    return (
        <div
            {...restProps}
            className={`
                tw-inline-block 
                tw-border 
                tw-p-2 
                tw-rounded-md 
                tw-bg-neutral-50 
                ${className}
            `}
        >
            {props?.children}
        </div>
    )
}

CompoundComponent.Image = Image
CompoundComponent.Heading = Heading
CompoundComponent.Price = Price
CompoundComponent.Description = Description

export default CompoundComponent