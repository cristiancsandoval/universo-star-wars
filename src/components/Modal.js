import React from 'react'

const Modal = ({data, state}) => {

    const [showModal, setShowModal] = state;
    const claseModal = showModal ? "modal" : "d-none";

  return (
    <div className={claseModal}>
        <div>
          <div>
            <h4>{data.name}</h4>
            <button onClick={()=>setShowModal(false)} className='btn-close'>
                <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1648047795/MentalApp/close-outline_cw6iqv.svg' alt='boton cerrar'/>
            </button>
          </div>
          <p><span>Altura: </span>{data.height}</p>
          <p><span>Peso: </span>{data.mass}</p>
          <p><span>Color de cabello: </span>{data.hair_color}</p>
          <p><span>Color de piel: </span>{data.skin_color}</p>
          <p><span>Color de ojos: </span>{data.eye_color}</p>
          <p><span>Año de nacimiento: </span>{data.birth_year}</p>
          <p><span>Género: </span>{data.gender}</p>
        </div>
    </div>
  )
}

export default Modal