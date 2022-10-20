import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'

import { darkTheme } from "./Styles/Themes/Dark";

import { Title } from './Components/Title/Index'
import {Intro} from './Components/Intro/Index'

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>
        <header></header>

        <Intro/>

      </ThemeProvider>
    </>
  );
}

export default App;
