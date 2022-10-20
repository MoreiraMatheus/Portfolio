import 'styled-components'

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundSection: string;
      title: string;
      text: string;
      themeSwitcher: string;
      themeSwitcherButton: string;
      pannelBaseColor: string;
    }
  }
}