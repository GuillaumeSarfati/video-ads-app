import React from 'react'
import { ThemeProvider } from 'styled-components'

export default ({children}) => (
  <ThemeProvider theme={{mode: 'dark'}}>
    { children }
  </ThemeProvider>
)
