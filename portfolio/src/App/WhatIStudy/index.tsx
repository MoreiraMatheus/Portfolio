import { Wrapper } from './Styles'

import { Title } from '../../Components/Title/Styles'
import { Tecnology } from '../../Components/Tecnology/index'

export function WhatIStudy(){
  return(
    <Wrapper>
      <Title>O que estudo</Title>
      <div>
        {/* criar um array com todas as imagens, nomes e descrições de cada projeto em um arquivo separado e inserir um map aqui para cada tecnologia */}
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
          tecnologyName='Python'
          description='Linguagem de programação Back-end muito utilizada na área de ciência de dados'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
          tecnologyName='TypeScript'
          description='Linguagem de desenvolvimento web, por baixo dos panos é um conjunto de novas adicções ao JavaScript, tornando ele uma linguagem tipada'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
          tecnologyName='JavaScript'
          description='Linguagem de desenvolvimento web, presente em todos os sites modernos'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
          tecnologyName='HTML5'
          description='Linguagem de marcação de hypertexto, responsável por inserir os elementos de um site na tela'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
          tecnologyName='CSS3'
          description='Assim como o HTML o CSS nada mais é do que uma linguagem de marcação, porém voltada para estilos de páginas web'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
          tecnologyName='React.JS'
          description='Biblioteca da linguagem JavaScript que permite criar sites e aplicativos mobile(em sua versão React native), muito conhecida por sua modularização, permitindo a utilização do mesmo código em várias partes'
        />
        <Tecnology 
          image='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png'
          tecnologyName='Styled-components'
          description='Biblioteca voltada para a estilização de componentes React e React native'
        />
        <Tecnology 
          image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
          tecnologyName='Git'
          description='Tecnologia de versionamento de código importantissima para o cotidiano de um programador independente de qual seja sua especialização'
        />
      </div>
    </Wrapper>
  )
}