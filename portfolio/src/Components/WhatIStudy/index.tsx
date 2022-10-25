import { Wrapper } from './Styles'

import { Title } from '../Title/Styles'
import { Tecnology } from '../Tecnology/index'

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