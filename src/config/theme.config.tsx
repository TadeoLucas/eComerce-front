import { createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import React from "react";

type themeProp = {
  children: JSX.Element;
};

enum themePalette {
  BACKGROUND = "#ffffff",
  LIGHT = "#4dffff",
  DARK = "#000000"
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.DARK,
    },
    // primary: {
    //     main: themePalette.LIGHT
    // }
  },
  components: {
      // MuiContainer: {

      // }

  },
  typography: {

  }
});

export const ThemeConfig: React.FC<themeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};
