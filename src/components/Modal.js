import React from 'react'

const Modal = ({data, state}) => {

    const [showModal, setShowModal] = state;
    const claseModal = showModal ? "modal" : "d-none";

  return (
    <div className={claseModal}>
        <button onClick={()=>setShowModal(false)} className='btn-close'>
            Close
        </button>
    </div>
  )
}

export default Modal