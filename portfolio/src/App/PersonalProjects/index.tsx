import { Wrapper, Slider, Project } from './Styles'

import { Title } from '../../Components/Title/Styles'

import GithubSearch from '../../assets/projectsImages/GithubSearch.png'
import JogoDaVelha from '../../assets/projectsImages/JogoDaVelha.png'
import LoginPage from '../../assets/projectsImages/LoginPage.png'
import PeopleRegisterSistem from '../../assets/projectsImages/PeopleRegisterSistem.png'
import ToDoList from '../../assets/projectsImages/ToDoList.png'
import CalculadoraJS from '../../assets/projectsImages/CalculadoraJS.png'
import Cronometro from '../../assets/projectsImages/Cronometro.png'
import Pokedex from '../../assets/projectsImages/Pokedex.png'
import TrocaDeTema from '../../assets/projectsImages/TrocaDeTema.png'

interface project{
  key:string;
  image:string;
  title:string;
  description:string;
}

const projects:Array<project> = [
  {key:'1', image: GithubSearch, title: 'Github search', description: 'descrição'},
  {key:'2', image: PeopleRegisterSistem, title: 'People register sistem', description: 'descrição'},
  {key:'3', image: JogoDaVelha, title: 'Jogo da velha', description: 'descrição'},
  {key:'4', image: LoginPage, title: 'Página de login', description: 'descrição'},
  {key:'5', image: ToDoList, title: 'To do list', description: 'descrição'},
  {key:'6', image: CalculadoraJS, title: 'Calculadora', description: 'descrição'},
  {key:'7', image: Cronometro, title: 'Cronômetro', description: 'descrição'},
  {key:'8', image: Pokedex, title: 'Pokedex', description: 'descrição'},
  {key:'9', image: TrocaDeTema, title: 'Troca de tema', description: 'descrição'},
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