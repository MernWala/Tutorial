import React, { useContext } from 'react'
import FunctionContext from './FunctionContext'
import DataContext from '../data/DataContext'
import toast from 'react-hot-toast'

const FunctionState = (props) => {

    const { myString, setMyString, setTheme, setShow } = useContext(DataContext)

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

    const handleFindAndReplace = (find, replace) => {
        setMyString(prev => {
            return prev.replace(find, replace)
        })

        setShow(false)
        toast.success(`Find: ${find} and Replace: ${replace}`)
    }

    const handleTheme = () => {
        setTheme((prev) => {
            localStorage.setItem('theme', prev === 'dark' ? 'light' : 'dark')
            return prev === 'dark' ? 'light' : 'dark'
        })
    }

    return (
        <FunctionContext.Provider value={{
            handleUpperCase, handleLowerCase, handleCapitilizeCase, handleCamelCase, handleKebabCase,
            handleSnakeCase, handleReversePara, handleReverseString, handleFixSpace, handleCopy,
            handleClear, handleFindAndReplace, handleTheme
        }}>
            {props.children}
        </FunctionContext.Provider>
    )
}

export default FunctionState