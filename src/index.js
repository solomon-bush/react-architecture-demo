import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* MUI */
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
/* INT */
import BaseRouter from './Router/BaseRouter'

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e0e0e0',
    },
    secondary: {
      main: '#00bcd4',
    }
  },
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BaseRouter/>
  </ThemeProvider>,
  document.getElementById('root')
);
