import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import ToggleTheme from '../components/ToggleTheme'
import toast from 'react-hot-toast'

const Home = ({ setModalShow, myString, setMyString, theme, setTheme }) => {

    useEffect(() => {
      let savedTheme = localStorage.getItem('theme')
      setTheme(savedTheme)
    }, [setTheme])

    const handleUpperCase = () => {
        toast.success("Converted to Uppercase")
        setMyString(myString.toUpperCase())
    }

    const handleLowerCase = () => {
        toast.success("Converted to Lowercase")
        setMyString(myString.toLowerCase())
    }

    const handleCapitilizeCase = () => {
        toast.success("Text Capitilize")

        setMyString(prev => {
            return prev.split(" ").map(ele => {
                return ele.substring(0, 1).toUpperCase() + ele.substring(1).toLowerCase()
            }).join(" ")
        })
    }

    const handleCamelCase = () => {
        toast.success("Converted to Camel Case")

        setMyString(prev => {
            return prev?.replace(/[.,!?]/g, "").split(" ").map((ele, idx) => {
                return idx === 0 ?
                    ele.toLowerCase()
                    :
                    ele.substring(0, 1).toUpperCase() + ele.substring(1).toLowerCase()
            }).join("")
        })
    }

    const handleKebabCase = () => {
        toast.success("Converted to Kebab Case")

        setMyString(prev => {
            return prev?.replace(/[.,!?]/g, "").split(" ").map(ele => {
                return ele.toLowerCase()
            }).join("-")
        })
    }

    const handleSnakeCase = () => {
        toast.success("Converted to Snake Case")

        setMyString(prev => {
            return prev?.replace(/[.,!?]/g, "").split(" ").map(ele => {
                return ele.toLowerCase()
            }).join("_")
        })
    }

    const handleReversePara = () => {
        toast.success("Pragragraph is now reversed")

        setMyString(prev => {
            return prev?.split(" ").reverse().join(" ")
        })
    }

    const handleReverseString = () => {
        toast.success("String is now reversed")

        setMyString(prev => {
            return prev?.split("").reverse().join("")
        })
    }

    const handleFixSpace = () => {
        toast.success("Paragraph is fixed with space")

        setMyString(prev => {
            return prev.trim().replace(/\s+/g, " ")
        })
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(myString);
        toast.success("Text Copied!")
    }

    const handleClear = () => {
        setMyString("")
        toast.success("Text Cleared!")
    }

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

    const handleTheme = () => {
        setTheme((prev) => {
            localStorage.setItem('theme', prev === 'dark' ? 'light' : 'dark')
            return prev === 'dark' ? 'light' : 'dark'
        })
    }

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
                <Button varient={theme} name={'Uppercase'} onClick={handleUpperCase} />
                <Button varient={theme} name={'Lowercase'} onClick={handleLowerCase} />
                <Button varient={theme} name={'Capitalize Word'} onClick={handleCapitilizeCase} />
                <Button varient={theme} name={'Camel Case'} onClick={handleCamelCase} />
                <Button varient={theme} name={'Kebab Case'} onClick={handleKebabCase} />
                <Button varient={theme} name={'Snake Case'} onClick={handleSnakeCase} />
                <Button varient={theme} name={'Reverse Paragraph'} onClick={handleReversePara} />
                <Button varient={theme} name={'Reverse String'} onClick={handleReverseString} />
                <Button varient={theme} name={'Fix Space'} onClick={handleFixSpace} />
                <Button varient={theme} name={'Find & Replace'} onClick={() => setModalShow(true)} />
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