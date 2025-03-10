import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import ToggleTheme from '../components/ToggleTheme'
import DataContext from '../context/data/DataContext'
import FunctionContext from '../context/functions/FunctionContext'

const Home = () => {

    const {
        theme, myString, setMyString, setShow
    } = useContext(DataContext)

    const {
        handleUpperCase, handleLowerCase, handleCapitilizeCase, handleCamelCase, handleKebabCase,
        handleSnakeCase, handleReversePara, handleReverseString, handleFixSpace, handleCopy,
        handleClear, handleTheme, handleHtmlFriendly
    } = useContext(FunctionContext)

    const [wordCount, setwordCount] = useState(0)
    useEffect(() => {
        setwordCount(myString === "" ? 0 : myString.replace(/\s+/g, " ").split(" ").length)
    }, [myString])

    const [time, setTime] = useState(0)
    useEffect(() => {
        setTime(() => {
            const wordsPerMinute = 100
            const readingTime = wordCount / wordsPerMinute
            return Math.ceil(readingTime)
        })
    }, [wordCount])

    const [actionButtons] = useState([
        {
            id: 1,
            name: 'Uppercase',
            onClick: handleUpperCase
        },
        {
            id: 2,
            name: 'Lowercase',
            onClick: handleLowerCase
        },
        {
            id: 3,
            name: 'Capitilize Word',
            onClick: handleCapitilizeCase
        },
        {
            id: 4,
            name: 'Camel Case',
            onClick: handleCamelCase
        },
        {
            id: 5,
            name: 'Kebab Case',
            onClick: handleKebabCase
        },
        {
            id: 6,
            name: 'Snake Case',
            onClick: handleSnakeCase
        },
        {
            id: 7,
            name: 'Reverse Paragraph',
            onClick: handleReversePara
        },
        {
            id: 8,
            name: 'Reverse String',
            onClick: handleReverseString
        },
        {
            id: 9,
            name: 'Fix Space',
            onClick: handleFixSpace
        },
        {
            id: 10,
            name: 'Find & Replace',
            onClick: () => setShow(true)
        },
        {
            id: 11,
            name: 'HTML Friendly',
            onClick: handleHtmlFriendly
        },
    ])

    return (
        <div className={`tw-p-4 ${theme === 'dark' ? 'tw-bg-[#252525]' : 'tw-bg-[#fff]'} tw-min-h-[100vh] tw-flex tw-flex-col`}>
            <div>
                <textarea
                    placeholder='Your text here ...'
                    value={myString}
                    onChange={(e) => { setMyString(e.target.value) }}
                    className={`
                        tw-min-w-full 
                        ${theme === 'dark' ? 'tw-bg-[#3A3A3A]' : 'tw-bg-neutral-100'}
                        tw-min-h-[300px]
                        tw-outline-none
                        ${theme === 'dark' ? 'tw-border-neutral-600' : 'tw-border-neutral-200'}
                        ${theme === 'dark' ? 'tw-text-neutral-200' : 'tw-text-neutral-600'}
                        tw-border
                        tw-rounded-md
                        tw-p-3
                        placeholder-shown:tw-text-[#848484]
                        tw-text-${theme === 'dark' ? 'white' : 'black'}
                        tw-tracking-wide
                        tw-text-lg
                    `}
                >
                </textarea>
            </div>

            <div className="tw-mt-3 tw-flex-wrap tw-gap-3 tw-flex">
                <Button varient={'blue'} name={'Copy Text'} onClick={handleCopy} />
                <Button varient={'red'} name={'Clear Text'} onClick={handleClear} />
            </div>

            <div className='tw-flex-wrap tw-gap-3 tw-flex tw-mt-4 tw-justify-stretch'>
                {actionButtons.map(button => {
                    return (
                        <Button key={`action-buttons-${button.id}`} varient={theme} name={button.name} onClick={button.onClick} />
                    )
                })}
            </div>

            <div className='mt-auto tw-flex flex-wrap py-3 xl:tw-justify-start md:tw-justify-between tw-justify-between'>
                <div className='xl:tw-hidden md:tw-block block'>
                    <ToggleTheme onClick={handleTheme} theme={theme} />
                </div>
                <div className='xl:tw-w-full md:tw-w-1/2 tw-w-1/2 tw-flex flex-wrap'>
                    <div className='tw-flex xl:tw-w-1/2 md:tw-w-full tw-w-full xl:tw-justify-start md:tw-justify-end tw-justify-end'>
                        <span className={`tw-inline-block text-truncate tw-text-${theme === 'dark' ? 'white' : 'black'} tw-tracking-wide`}><strong className='tw-tracking-wide'>Total Words:</strong> {wordCount} words</span>
                    </div>
                    <div className='xl:tw-w-1/2 md:tw-w-full tw-w-full tw-flex xl:tw-justify-end md:tw-justify-end tw-justify-end'>
                        <span className={`tw-text-${theme === 'dark' ? 'white' : 'black'} tw-tracking-wide tw-inline-block text-truncate`}>{time} minutes need to read</span>
                    </div>
                </div>
            </div>

            <div className='tw-fixed xl:tw-block md:tw-hidden tw-hidden tw-left-0 tw-bottom-[90px]'>
                <ToggleTheme onClick={handleTheme} theme={theme} />
            </div>
        </div >
    )
}

export default Home