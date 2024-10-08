import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import FindReplaceModal from './components/FindReplaceModal';
import DataState from './context/data/DataState';
import FunctionState from './context/functions/FunctionState';

const App = () => {
  return (
    <DataState>
      <FunctionState>
        <Toaster />
        <Home />
        <FindReplaceModal />
      </FunctionState>
    </DataState>
  )
}

export default App