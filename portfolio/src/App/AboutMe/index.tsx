import { Title } from '../../Components/Title/Styles'
import { Wrapper } from './Styles'

export function AboutMe(){
  return(
    <Wrapper>
      <Title contrast >Sobre mim</Title>
          <div>
            <p>
              Sou estudante e programador em busca de uma oportunidade nesse ramo que tanto gosto.
            </p><br/>
            <p>
              Atualmente estou cursando Análise e desenvolvimento de sistemas e busco sempre aprimorar meus conhecimentos em tecnologias como HTML, CSS e JavaScript.
            </p><br/>
            <p>
              Tenho como meta de me tornar um desenvolvedor mobile e criar apps que sejam uteis no dia a dia das pessoas.
            </p>
          </div>
    </Wrapper>
  )
}