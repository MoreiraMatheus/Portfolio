import GlobalStyle from "../Styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'

import { darkTheme } from "../Styles/Themes/Dark";
import { lightTheme } from "../Styles/Themes/Ligth";

import { Intro } from './Intro/Index'
import { AboutMe } from './AboutMe/index'
import { WhatIStudy } from './WhatIStudy/index'
import { PersonalProjects } from './PersonalProjects/index'

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
