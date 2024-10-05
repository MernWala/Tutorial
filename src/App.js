import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import toast, { Toaster } from 'react-hot-toast';
import FindReplaceModal from './components/FindReplaceModal';

const App = () => {

  const [show, setShow] = useState(false)
  const [myString, setMyString] = useState("")
  const [theme, setTheme] = useState('dark')

  const handleFindAndReplace = (find, replace) => {
    setMyString(prev => {
      return prev.replace(find, replace)
    })

    setShow(false)
    toast.success(`Find: ${find} and Replace: ${replace}`)
  }

  return (
    <>
      <Toaster />
      <Home modalShow={show} setModalShow={setShow} myString={myString} setMyString={setMyString} theme={theme} setTheme={setTheme} />
      <FindReplaceModal show={show} setShow={setShow} handleFindAndReplace={handleFindAndReplace} />
    </>
  )
}

export default App