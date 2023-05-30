import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme } from './themes/dark.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
