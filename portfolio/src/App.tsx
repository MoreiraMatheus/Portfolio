import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'

import { darkTheme } from "./Styles/Themes/Dark";
import { lightTheme } from "./Styles/Themes/Ligth";

import { Intro } from './Components/Intro/Index'
import { AboutMe } from './Components/AboutMe/index'
import { WhatIStudy } from './Components/WhatIStudy/index'
import { PersonalProjects } from './Components/PersonalProjects/index'

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>
        <header></header>

        <Intro/>

        <AboutMe/>

        <WhatIStudy/>

        <PersonalProjects/>

      </ThemeProvider>
    </>
  );
}

export default App;
