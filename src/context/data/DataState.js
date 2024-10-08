import React, { useEffect, useState } from 'react'
import DataContext from './DataContext'

const DataState = (props) => {

    const [theme, setTheme] = useState('dark')
    useEffect(() => {
        let savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme ?? 'dark')
    }, [setTheme])

    const [show, setShow] = useState(false)
    const [myString, setMyString] = useState("")

    return (
        <DataContext.Provider value={{
            theme, setTheme, show, setShow, myString, setMyString
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState