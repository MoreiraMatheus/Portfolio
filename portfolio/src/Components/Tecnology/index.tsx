import { useState } from 'react';
import { Wrapper, Popup } from './Styles'

interface TecnologyProps{
  key?:string;
  image:string;
  tecnologyName:string;
  description?:string;
}

export function Tecnology({image, tecnologyName, description}:TecnologyProps){
  const [modalState, setModalState] = useState(false)

  return(
    <>
      <Wrapper onClick={()=>{setModalState(true)}}>
        <img src={image} alt={`logo ${tecnologyName}`} />
        <span>{tecnologyName}</span>
      </Wrapper>
      <Popup open={modalState} >
        <div >
          {/* Adicionar um icone da biblioteca phosphor icon aqui */}
          <button onClick={()=>{setModalState(false)}}>X</button>
          <p>{description}</p>
        </div>
      </Popup>
    </>
  )
}