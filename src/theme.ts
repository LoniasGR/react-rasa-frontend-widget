import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
      ternary: Palette['primary'];
    }
  
    interface PaletteOptions {
      ternary?: PaletteOptions['primary'];
    }
  }

declare module '@mui/material/styles' {
    interface PaletteColor {
      border?: string;
    }
  
    interface SimplePaletteColorOptions {
      border?: string;
    }
  }

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#008B8B",
        contrastText: "#fff",
      },
      secondary: {
        main: "#efefef",
        contrastText: "#000",
        border: "#ccc"
      },
      ternary: {
        main: "#f4f7f9",
        contrastText: "#888"
      }
    },
  });
