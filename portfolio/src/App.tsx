import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'

import { darkTheme } from "./Styles/Themes/Dark";

import { Title } from './Components/Title/Styles'
import {Intro} from './Components/Intro/Index'
import {AboutMe} from './Components/AboutMe/index'

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>
        <header></header>

        <Intro/>

        <AboutMe/>

      </ThemeProvider>
    </>
  );
}

export default App;
