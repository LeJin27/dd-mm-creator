import { createTheme } from "@mui/material/styles"

const commonTheme = {
  typography: {
    fontFamily: `"Manrope", "Roboto", "Helvetica", sans-serif`,
    fontWeightMedium: 400,
    fontWeightRegular: 400,
    fontSize: 13,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};
export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: "#1AA74A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: '#063E22',
    },
    background: {
      default: "#f8f8f8",
    },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: "#1AA74A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: '#063E22',
    },
    background: {
      default: "#121212",
    },
  },
});

