import { Wrapper } from './Styles'

import github from '../../assets/socialMedia/github-icon.svg'
import instagram from '../../assets/socialMedia/instagram-icon.svg'
import linkedin from '../../assets/socialMedia/linkedin-icon.svg'
import gmail from '../../assets/socialMedia/gmail-icon.svg'

import { Title } from '../../Components/Title/Styles'
import { ContactButton } from '../../Components/ContactButton/index'

export function Contact(){
  return(
    <Wrapper>
      <Title>Entre em contato</Title>
      <div>
        <ContactButton image={github} link='https://github.com/MoreiraMatheus' socialMediaName='Github'/>
        <ContactButton image={instagram} link='https://instagram.com/matheusmoreiradesantana' socialMediaName='Instagram'/>
        <ContactButton image={linkedin} link='https://www.linkedin.com/in/matheus-moreira-7b5605204' socialMediaName='linkedin'/>
        <ContactButton image={gmail} link='mailto:matheus.m.santana87@gmail.com' socialMediaName='gmail'/>
      </div>
    </Wrapper>
  )
}