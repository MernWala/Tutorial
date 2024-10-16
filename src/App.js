import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import FindReplaceModal from './components/FindReplaceModal';
import DataState from './context/data/DataState';
import FunctionState from './context/functions/FunctionState';
import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';

const App = () => {
  return (
    <DataState>
      <FunctionState>
        <Toaster />
        <HashRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
            </Route>
          </Routes>
        </HashRouter>
        <FindReplaceModal />
      </FunctionState>
    </DataState>
  )
}

export default App