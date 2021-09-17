import React from 'react';
import ReactDOM from 'react-dom';
/* MUI */
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
/* INT */
import App from './App';
import { Container } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e0e0e0',
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
    <Container>
      <App />
    </Container>
  </ThemeProvider>,
  document.getElementById('root')
);
