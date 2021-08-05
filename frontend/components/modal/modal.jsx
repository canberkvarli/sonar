import React from 'react'


const Modal = ({handleClose, show, children}) => {
    
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
            </section>
            <button onClick={handleClose}>
                X
            </button>
        </div>
    );
}  



export default Modal;
