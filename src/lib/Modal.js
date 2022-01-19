import React from 'react'
import './Modal.css'
export default function Modal(props) {
    let {content, handleChange, value} = props
    
    // close modal by using setState from parent component
    const closeModal = _ => {
        handleChange(false)
    }

    return (
        <>
            {
                value && (
                    <aside className='background-Modal'>
                        <div className='container-Modal'>
                            <button className="button-Modal" onClick={closeModal}>&#x2715;</button>
                            <h3>{content}</h3>
                        </div>
                    </aside>
                )
            }
        </>
    )
}
