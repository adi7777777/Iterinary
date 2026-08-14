import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#16a34a",
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;