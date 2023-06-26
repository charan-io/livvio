import React from 'react';
import './App.css';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { Typography } from '@mui/material';
import PrimarySearchAppBar from './components/ResponsiveAppBar';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
       {/* <PrimarySearchAppBar></PrimarySearchAppBar> */}
        <div className="App">
        <Typography fontWeight= 'bold' variant = "h1">Hello, Welcome to LIVV.</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
