import { Wrapper } from './Styles'

import fotoPerfil from '../../assets/generalmages/foto-perfil.png'

export function Intro(){
  return(
    <Wrapper>
      <img src={fotoPerfil} alt="Foto perfil"/>
      <div>
        <h1>Olá, me chamo Matheus Moreira e esse é meu portfólio, seja bem vindo</h1>
        <a href='/curriculo.pdf' download>Clique aqui para baixar meu curriculo</a>
      </div>
    </Wrapper>
  )
}