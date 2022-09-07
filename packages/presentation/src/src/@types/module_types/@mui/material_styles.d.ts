import { ThemeAttribute } from 'theme/theme.type'

declare module '@mui/material/styles' {
  interface Theme {
    theme: ThemeAttribute
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    theme: ThemeAttribute
  }
}
