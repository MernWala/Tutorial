import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import DataContext from '../context/data/DataContext';
import FunctionContext from '../context/functions/FunctionContext';

const FindReplaceModal = () => {

    const { show, setShow } = useContext(DataContext)
    const { handleFindAndReplace } = useContext(FunctionContext)
    
    const [formdata, setFormdata] = useState({})
    const handleOnChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    return (
        <Modal show={show} onHide={() => setShow(!show)} style={{ backdropFilter: 'blur(5px) brightness(.5)' }}>
            <Modal.Header closeButton className={`!tw-py-1 !tw-bg-blue-600`}>
                <Modal.Title className='!tw-text-white !tw-text-xl !tw-tracking-wide'>Find & Replace</Modal.Title>
            </Modal.Header>
            <Modal.Body className='!tw-bg-neutral-100 !tw-rounded-md'>
                <Form onSubmit={(e) => { e.preventDefault(); handleFindAndReplace(formdata?.find, formdata?.replace); }} className='tw-flex tw-flex-col'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='!tw-mb-1 !tw-text-sm'>Find Text</Form.Label>
                        <Form.Control
                            name="find"
                            type="text"
                            className={`!tw-rounded-md focus:!tw-shadow-none 
                                focus:tw-ring-2 focus:tw-ring-blue-800 focus:tw-border-none`}
                            placeholder="What you are finding for?"
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='!tw-mb-1 !tw-text-sm'>Replace Text</Form.Label>
                        <Form.Control
                            name="replace"
                            type="text"
                            className={`!tw-rounded-md focus:!tw-shadow-none 
                                focus:tw-ring-2 focus:tw-ring-blue-800 focus:tw-border-none`}
                            placeholder="Replace Text?"
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className={'!tw-w-full'}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default FindReplaceModal