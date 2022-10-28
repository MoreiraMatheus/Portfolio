import { Wrapper } from './Styles'

interface ThemeSwitcherProps{
  themeOptions:Array<object>;
  currentTheme:object;
  changeTheme:any;
}

export function ThemeSwitcher({currentTheme, changeTheme, themeOptions}:ThemeSwitcherProps){
  return(
    <Wrapper>
      <div>
        <input type="checkbox" name="checkbox" id="idCheckbox" onClick={()=>{
          currentTheme === themeOptions[0] 
          ? changeTheme(themeOptions[1])
          : changeTheme(themeOptions[0])
        }}/>
        <div></div>
      </div>
    </Wrapper>
  )
}