import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const FindReplaceModal = (props) => {

    const [formdata, setFormdata] = useState({})

    return (
        <Modal show={props?.show} onHide={() => props?.setShow(!props.show)} style={{ backdropFilter: 'blur(5px) brightness(.5)' }}>
            <Modal.Header closeButton className={`!tw-py-1 !tw-bg-blue-600`}>
                <Modal.Title className='!tw-text-white !tw-text-xl !tw-tracking-wide'>Find & Replace</Modal.Title>
            </Modal.Header>
            <Modal.Body className='!tw-bg-neutral-100 !tw-rounded-md'>
                <Form onSubmit={(e) => { e.preventDefault(); props.handleFindAndReplace(formdata?.find, formdata?.replace); }} className='tw-flex tw-flex-col'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='!tw-mb-1 !tw-text-sm'>Find Text</Form.Label>
                        <Form.Control
                            name="find"
                            type="text"
                            className={`!tw-rounded-md focus:!tw-shadow-none 
                                focus:tw-ring-2 focus:tw-ring-blue-800 focus:tw-border-none`}
                            placeholder="What you are finding for?"
                            onChange={(e) => { setFormdata({ ...formdata, [e.target.name]: e.target.value }) }}
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
                            onChange={(e) => { setFormdata({ ...formdata, [e.target.name]: e.target.value }) }}
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