import { Wrapper, Slider, Project } from './Styles'

import { Title } from '../Title/Styles'

export function PersonalProjects(){
  return(
    <Wrapper>
      <Title>Projetos</Title>
      <Slider>
        <Project/>
        <Project/>
      </Slider>
    </Wrapper>
  )
}