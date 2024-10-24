import "../styles/main.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: "3.5rem",
      textTransform: "uppercase",
      lineHeight: "3.625rem",
      letterSpacing: "0.125em",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2.5rem",
      textTransform: "uppercase",
      lineHeight: "2.75rem",
      letterSpacing: "0.09375rem",
    },
    h6: {
      fontWeight: "bold",
      fontSize: "1.125rem",
      textTransform: "uppercase",
      lineHeight: "1.5rem",
      letterSpacing: "0.08125rem",
    },
    overline: {
      fontWeight: "normal",
      fontSize: "0.875rem",
      textTransform: "uppercase",
      lineHeight: "1.1875rem",
      letterSpacing: "0.625rem",
    },
    subtitle1: {
      fontWeight: "bold",
      fontSize: "0.8125rem",
      textTransform: "uppercase",
      lineHeight: "1.5625rem",
      letterSpacing: "0.0625rem",
    },
    body1: {
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: "1.5625rem",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
