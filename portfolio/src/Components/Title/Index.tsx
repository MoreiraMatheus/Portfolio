import { Wrapper } from './Styles'

interface TitleProps{
  children: string;
}

export function Title({ children }:TitleProps){
  return(
    <Wrapper><span>{'</'}</span>{children}<span>{'>'}</span></Wrapper>
  )
}