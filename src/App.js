import React, { useState } from 'react'
import Modal from './lib/index'

export default function App() {
    const [open, setOpen] = useState(false)
    const openModal = () => {
        setOpen(true)
    }
    return(
        <>
            {/* isOpen allows to toggle value of open */}
            <Modal content='Employé Crée' handleChange={setOpen} value={open}/>
            <button onClick={openModal}>button</button>
        </> 

    )
}




