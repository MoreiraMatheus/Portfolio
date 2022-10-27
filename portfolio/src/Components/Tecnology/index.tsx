import { Wrapper } from './Styles'

interface TecnologyProps{
  key?:string;
  image:string;
  tecnologyName:string;
}

export function Tecnology({image, tecnologyName}:TecnologyProps){
  return(
    <Wrapper>
      <img src={image} alt={`logo ${tecnologyName}`} />
      <span>{tecnologyName}</span>  
    </Wrapper>
  )
}