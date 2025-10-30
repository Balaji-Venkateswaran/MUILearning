'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0061C2', 
      contrastText: '#EBF5FF',
    },
    background: {
      default: '#0F1214', 
      paper: '#0F1214',
    },
    text: {
      primary: '#EBF5FF', 
      secondary: '#B0C4DE',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

export default theme;
