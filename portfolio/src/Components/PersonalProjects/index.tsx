import { Wrapper, Slider, Project } from './Styles'

import { Title } from '../Title/Styles'

import GithubSearch from '../../assets/projectsImages/GithubSearch.png'
import JogoDaVelha from '../../assets/projectsImages/JogoDaVelha.png'
import LoginPage from '../../assets/projectsImages/LoginPage.png'
import PeopleRegisterSistem from '../../assets/projectsImages/PeopleRegisterSistem.png'

const images:Array<string> = [GithubSearch, JogoDaVelha, LoginPage, PeopleRegisterSistem]

export function PersonalProjects(){
  return(
    <Wrapper>
      <Title contrast>Projetos</Title>
      <Slider>
        {images.map(item =>(
          <Project key={item}>
            <img src={item} alt="foto-projeto"/>
            <Title customPadding='4px'>Teste</Title>
            <p>Descição Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit soluta saepe nobis voluptatem dolor, ea ex, facere, voluptates quod vero veritatis ipsum consequuntur natus quibusdam nesciunt suscipit necessitatibus? Adipisci!</p>
          </Project>
        ))}
      </Slider>
    </Wrapper>
  )
}