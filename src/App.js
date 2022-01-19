import React, { useState } from 'react'
import Modal from './lib/index'

export default function App() {
    const [open, setOpen] = useState(false)
    const openModal = () => {
        setOpen(true)
        console.log(open);
    }
    return(
        <>
            <Modal content='Employé Crée' isOpen={setOpen} open={open}/>
            <button onClick={openModal}>button</button>
        </> 

    )
}




