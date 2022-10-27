import { Wrapper, Slider, Project } from './Styles'

import { Title } from '../../Components/Title/Styles'

import GithubSearch from '../../assets/projectsImages/GithubSearch.png'
import JogoDaVelha from '../../assets/projectsImages/JogoDaVelha.png'
import LoginPage from '../../assets/projectsImages/LoginPage.png'
import PeopleRegisterSistem from '../../assets/projectsImages/PeopleRegisterSistem.png'

interface project{
  key:string;
  image:string;
  title:string;
  description:string;
}

const projects:Array<project> = [
  {key:'1', image: GithubSearch, title: 'Github search', description: 'descrição'},
  {key:'2', image: JogoDaVelha, title: 'Jogo da velha', description: 'descrição'},
  {key:'3', image: LoginPage, title: 'Página de login', description: 'descrição'},
  {key:'4', image: PeopleRegisterSistem, title: 'People register sistem', description: 'descrição'}
]

export function PersonalProjects(){
  return(
    <Wrapper>
      <Title contrast>Projetos</Title>
      <Slider>
        {projects.map(item =>(
          <Project key={item.key}>
            <img src={item.image} alt="foto-projeto"/>
            <Title customPadding='4px'>{item.title}</Title>
            <p>{item.description}</p>
          </Project>
        ))}
      </Slider>
    </Wrapper>
  )
}