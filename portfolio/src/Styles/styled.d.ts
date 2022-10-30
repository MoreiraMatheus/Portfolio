import 'styled-components'

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundSection: string;
      title: string;
      text: string;
      textSection: string,
      themeSwitcher: string;
      pannelBaseColor: string;
    }
  }
}