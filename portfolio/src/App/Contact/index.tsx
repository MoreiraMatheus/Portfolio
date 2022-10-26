import { Wrapper } from './Styles'

import github from '../../assets/socialMedia/github-icon.svg'
import instagram from '../../assets/socialMedia/instagram-icon.svg'
import linkedin from '../../assets/socialMedia/linkedin-icon.svg'
import gmail from '../../assets/socialMedia/gmail-icon.svg'

import { Title } from '../../Components/Title/Styles'
import { ContactButton } from '../../Components/ContactButton/Styles'

export function Contact(){
  return(
    <Wrapper>
      <Title>Entre em contato</Title>
      <div>
        <ContactButton>
          <img src={github} alt="" />
        </ContactButton>

        <ContactButton>
          <img src={instagram} alt="" />
        </ContactButton>

        <ContactButton>
          <img src={linkedin} alt="" />
        </ContactButton>

        <ContactButton>
          <img src={gmail} alt="" />
        </ContactButton>
      </div>
    </Wrapper>
  )
}