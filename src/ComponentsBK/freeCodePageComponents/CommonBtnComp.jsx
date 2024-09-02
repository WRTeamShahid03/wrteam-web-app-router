import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoClose } from "react-icons/io5";

const CommonBtnComp = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (
        <div className='freeCodeDetailModalWrapper'>
            <div className='codePageCommonBtnWrapper' onClick={handleShow}>
                <button className='codePageCommonBtn'>
                    Yes I Want These Source Code
                    <span>(Star Coding smarter, not harder)</span>
                </button>
                <span>(17,000+ Happy Customers )</span>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                className='freeCodeDetailModal'
                size='lg'
            >
                <div>

                    <span className='closeBtn' onClick={handleClose}><IoClose /></span>
                    <iframe
                        width="100%"
                        height="900"
                        src="https://0c7023da.sibforms.com/serve/MUIFANUDnC0aTDyH5jIbVasxafIzKCAdnOPT3mkbU-DehPzRCPSUDMrbfxlOv_J8o6gA66SW6HH3NgP7s2s85G9kPN2mvHtGdzjuDUlq8lAmXvwdF5wrM2mfr7ODIVhw0joM-GJwbTXeHJykjXtcJuu3UfY4sLDuy_sFnTTDjkEyDJJpT1oooMxBYCFRBfKwmC5Zs4hRaYUufGF-"
                        frameBorder="0"
                        scrolling="auto"
                        allowFullScreen
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: '100%'
                        }}
                    />
                </div>
            </Modal>

        </div>


    )
}

export default CommonBtnComp