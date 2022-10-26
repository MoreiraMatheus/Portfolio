import { Wrapper } from './Styles'

import { Title } from '../../Components/Title/Styles'
import { Tecnology } from '../../Components/Tecnology/index'

export function WhatIStudy(){
  return(
    <Wrapper>
      <Title>O que estudo</Title>
      <div>
        <Tecnology/>
        <Tecnology/>
        <Tecnology/>
        <Tecnology/>
        <Tecnology/>
        <Tecnology/>
      </div>
    </Wrapper>
  )
}