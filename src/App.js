import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const App = () => {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <div className='pt-5 mt-5'>
        <h1 className='font-weight-bold fs-2 mb-2'>Getting Start With <span className='text-primary'>React.js</span></h1>
        <p>Welcome to the journey of learning technical stuff</p>
      </div>

      <Button onClick={toggleShow} className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </Button>

      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>

    </div>
  )
}

export default App