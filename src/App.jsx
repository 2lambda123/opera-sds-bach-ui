import React from "react";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from '@mui/material/styles';



import Routes from "@bach/pages/Routes";

import Contexts from "@bach/contexts";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#10B0AB",
      dark: "#069995",
    },
    secondary: {
      main: "#EEEEEE",
    },
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Contexts>
            <Routes />
          </Contexts>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
