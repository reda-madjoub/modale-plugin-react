import React, {useState} from 'react'
import './Modal.css'

export default function Modal(props) {
    let {content} = props
    const [open, setOpen] = useState(false)
    const closeModal = _ => {
        setOpen(!open)
    }
    return (
        <>
        {
            !open && (
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
