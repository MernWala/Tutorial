import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const App = () => {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <div className="d-flex flex-column align-items-center w-100 tw-gap-5">
      <div className='pt-5 mt-5'>
        <h1 className='font-weight-bold fs-2 mb-2'>Getting Start With <span className='text-primary'>React.js</span></h1>
        <p>Welcome to the journey of learning technical stuff</p>
      </div>

      <Button onClick={toggleShow} className="!tw-bg-rose-600 !tw-text-xl hover:!tw-bg-rose-700 !tw-border-0 !tw-px-8 !tw-py-3">
        Toggle Toast <strong>with</strong> Animation
      </Button>

      <Toast show={show} onClose={toggleShow} className='!tw-border-0'>
        <Toast.Header className='!tw-bg-rose-800 !tw-border-0 tw-select-none'>
          <strong className="tw-me-auto tw-text-white tw-font-light tw-uppercase tw-tracking-wider">Bootstrap</strong>
          <small className='tw-text-white'>11 mins ago</small>
        </Toast.Header>
        <Toast.Body className='tw-bg-neutral-100 tw-overflow-hidden tw-border tw-border-t-0 tw-border-rose-800 tw-rounded-b-md selection:tw-bg-rose-500 selection:tw-text-white'>
          Woohoo, you're reading this text in a Toast!
        </Toast.Body>
      </Toast>

    </div>
  )
}

export default App