import React from 'react'

import './Modal.css'

const Modal = () => {
    return (
        <div className='Modal-overlay'>
            <h1 className='Modal-header'>Invalid Input</h1>
            <div className='Modal-body'>
                <p className='Modal-text'>Please enter a valid age ( {'>'} 0)</p>
                <button className='Modal-button'>Okay</button>
            </div>
        </div>
    )

}

export default Modal;