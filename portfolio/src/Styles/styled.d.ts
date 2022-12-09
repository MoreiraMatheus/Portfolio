import 'styled-components'

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string;

    colors: {
      text:{
        title: string;
        text: string;
        textSection: string,
        textSectionShadow: string,
      },
      others:{
        background: string;
        backgroundSection: string;
        themeSwitcher: string;
        pannelBaseColor: string;
        arrowColor: string;
      }
    }
  }
}