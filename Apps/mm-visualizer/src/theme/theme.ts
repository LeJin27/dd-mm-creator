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
    MuiCssBaseline: {
    },
  },
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: "#007fff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: '#f58a07',
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
      main: "#007fff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: '#f58a07',
    },
    background: {
      default: "#121212",
    },
  },
});

