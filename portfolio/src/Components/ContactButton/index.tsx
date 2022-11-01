import { Wrapper } from './Styles'

interface ContactButtonProps {
  image:string;
  link:string;
  socialMediaName:string;
}

export function ContactButton(
  {image, link, socialMediaName}:ContactButtonProps
){
  return(
    <Wrapper>
      <a href={link} target='_blank'>
        <img src={image} alt={`entre em contato via ${socialMediaName}`} />
      </a>
    </Wrapper>
  )
}