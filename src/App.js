import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import FindReplaceModal from './components/FindReplaceModal';
import DataState from './context/data/DataState';
import FunctionState from './context/functions/FunctionState';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';

const App = () => {
  return (
    <DataState>
      <FunctionState>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            {/* <Route path='/'>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
        <FindReplaceModal />
      </FunctionState>
    </DataState>
  )
}

export default App