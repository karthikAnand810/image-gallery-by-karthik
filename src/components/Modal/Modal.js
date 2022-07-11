import React from 'react'
import './modal.css'
const Modal = ({ closeModal }) => {
    return (
        <div className='modalBackground'>
            <div className="modelContainer">
                <div className='modal-close'>
                    <h2 onClick={() => closeModal(false)}>X</h2>
                </div>
                <div className="image-container">

                </div>
                <div className="card-details">
                    <div className='card-title'>
                        <h1></h1>
                    </div>
                    <div className='card-content'>
                        <p></p>
                    </div>
                    <div className='footer'>
                        <p></p>
                        <p>Nov25, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal