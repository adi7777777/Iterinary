import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#667eea",
      contrastText: "#fff"
    },
    secondary: {
      main: "#764ba2",
    },
    background: {
      default: "#eef5ff",
      paper: "#ffffff",
    },
    gradients: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
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

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10
        }
      }
    }
  }
});

export default theme;