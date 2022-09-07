import React, { useMemo } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles'
import normalTheme from 'theme/normal'

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useMemo(() => {
    return createTheme({
      theme: normalTheme,
    })
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={theme}>
        <MuiThemeProvider theme={createTheme(theme)}>
          {children}
        </MuiThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
