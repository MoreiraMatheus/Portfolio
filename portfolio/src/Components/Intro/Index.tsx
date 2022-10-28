import {Wrapper} from './Styles'

import fotoPerfil from '../../assets/img/foto-perfil.png'

export function Intro(){
  return(
    <Wrapper>
      <img src={fotoPerfil} alt="Foto perfil"/>
      <h1>Olá, me chamo Matheus Moreira e esse é meu portfólio, seja bem vindo</h1>
    </Wrapper>
  )
}