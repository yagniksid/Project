import React from 'react'

import { Modal, ModalBody, ModalHeader } from 'reactstrap'


export default function PreviewModal({ modal, toggle, previewData }) {

    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle} size='lg'>
                    <ModalHeader toggle={toggle}>Product Preview</ModalHeader>
                    <ModalBody>
                        <div>
                            <div className='flex justify-center items-center'>
                                <img src={previewData?.thumbnail} className='w-96 h-96 m-7' alt="Product Thumbnail" />
                            </div>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'>Title</span> : {previewData?.title}</p>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'> Description </span> : {previewData?.description}</p>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'> Gender </span> : {previewData?.gender}</p>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'> Price </span> : {previewData?.price}</p>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}
