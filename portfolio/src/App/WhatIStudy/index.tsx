import { Wrapper } from './Styles'

import { Title } from '../../Components/Title/Styles'
import { Tecnology } from '../../Components/Tecnology/index'

export function WhatIStudy(){
  return(
    <Wrapper>
      <Title>O que estudo</Title>
      <div>
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
          tecnologyName='Python'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
          tecnologyName='TypeScript'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
          tecnologyName='JavaScript'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
          tecnologyName='HTML5'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
          tecnologyName='CSS3'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
          tecnologyName='React.JS'
        />
        <Tecnology 
          image='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png'
          tecnologyName='Styled-components'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
          tecnologyName='Git'
        />
      </div>
    </Wrapper>
  )
}