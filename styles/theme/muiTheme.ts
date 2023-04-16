import {
  PaletteColorOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { APP_COLORS } from "../colors";

declare module "@mui/material/styles" {
  interface CustomPalette {
    milkWhite?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface Theme extends CustomPalette {}
  interface ThemeOptions extends CustomPalette {}
}

// Override button props
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    milkWhite: true;
  }
}
const defaultTheme = createTheme({
  spacing: 10,
});
const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: any) =>
  augmentColor({
    color: {
      main: mainColor,
    },
  });
const muiTheme = createTheme({
  palette: {
    mode: "light",
    milkWhite: createColor(APP_COLORS.WHITE),
  },
  spacing: defaultTheme.spacing,
  typography: {
    fontFamily: ["Inter", "Poppins"].join(","),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 800,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
    },
    caption: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        color: "primary",
        size: "medium",
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
      },
    },
  },
});
export default responsiveFontSizes(muiTheme);
