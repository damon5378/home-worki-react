import React, {ChangeEvent} from 'react'
import './Modal.css';
import close from './close.svg';

export type ModalType ={
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    modal: string
    isOpen: boolean
    onCancel: () => void
}


export const Modal = ({modal, isOpen, onCancel}: ModalType) => {


    let displayNone = 'displayNone';

    return (
        <>
        {isOpen ?
            <div className="modal__wrapper"> 
                <h1 className="modal__title">{modal}</h1> 
                <img 
                    src={close} 
                    alt="close" 
                    className="modal__close"
                    onClick={onCancel}/> 
            </div>
            :
            <div className={displayNone}></div>
}
    </>
    )
}
