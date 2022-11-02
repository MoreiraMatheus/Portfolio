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

const pythonProjectsImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg'

interface project{
  link?:string;
  key:string;
  image:string;
  title:string;
  description:string;
}

const projects:Array<project> = [
  {key:'1', link: 'https://github.com/MoreiraMatheus/github-search', image: GithubSearch, title: 'Github search', description: 'Página que busca perfis no Github utilizando a API da plataforma (a título de curiosidade foi meu primeiro projeto com React.JS e me orgulho dele até hoje)'},
  {key:'2', link: 'https://github.com/MoreiraMatheus/People-Register-Sistem', image: PeopleRegisterSistem, title: 'People register sistem', description: 'Projeto que cadastra pessoas e salva os dados cadastrados no LocalStorage do usuário'},
  {key:'3', link: 'https://github.com/MoreiraMatheus/jogo-da-velha', image: JogoDaVelha, title: 'Jogo da velha', description: 'O bom e velho jogo da velha más dessa vez em uma versão que pode ser jogada diretamente do navegador'},
  {key:'4', link: 'https://github.com/MoreiraMatheus/tela-de-login', image: LoginPage, title: 'Página de login', description: 'Página de login feita com HTML5 e CSS3 e um pouco de JS com o propósito de simular uma tela de login básica'},
  {key:'5', link: 'https://github.com/MoreiraMatheus/to-do-list', image: ToDoList, title: 'To do list', description: 'Lista de tarefas com opções de inserir, alterar, deletar e concluir tarefas'},
  {key:'6', link: 'https://github.com/MoreiraMatheus/calculadora-js', image: CalculadoraJS, title: 'Calculadora', description: 'Calculadora capaz de realizar as 4 operações básicas (me orgulho muito de esse ter sido meu primeiro projeto em que fiz uso do JavaScript)'},
  {key:'7', link: 'https://github.com/MoreiraMatheus/cronometro', image: Cronometro, title: 'Cronômetro', description: 'Crônometro com funções de start, pause, reset e que cumprimenta o usuário de forma diferente dependendo do horário'},
  {key:'8', link: 'https://github.com/MoreiraMatheus/Pokedex', image: Pokedex, title: 'Pokedex', description: 'Projeto desenvolvido durante o evento Mapa Dev Week um event de programação oferecido pelo canal Dev em Dobro'},
  {key:'9', link: 'https://github.com/MoreiraMatheus/troca-de-tema', image: TrocaDeTema, title: 'Troca de tema', description: 'Site criado para exercer meus conhecimentos em JS com a funcionalidade de troca de temas'},
  {key:'10', link: 'https://github.com/MoreiraMatheus/Organizador-de-arquivos', image: pythonProjectsImage, title: 'Organizador de arquivos', description: 'Projeto que organiza os arquivos do diretório desejado separando eles em pastas por tipo de extensão'},
]

export function PersonalProjects(){
  return(
    <Wrapper translate='no'>
      <Title contrast>Projetos</Title>
      <Slider>
        {projects.map(item =>(
          <Project key={item.key}>
            <img src={item.image} alt="foto-projeto"/>
            <a href={item.link} target='_blank'>
              <Title customPadding='4px'>{item.title}</Title>
            </a> 
            <p>{item.description}</p>
          </Project>
        ))}
      </Slider>
    </Wrapper>
  )
}