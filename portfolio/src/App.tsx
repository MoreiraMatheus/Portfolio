import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'

import { darkTheme } from "./Styles/Themes/Dark";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>
        <h1>Olá mundo</h1>
        <p>Este será meu portfólio</p>
      </ThemeProvider>
    </>
  );
}

export default App;
