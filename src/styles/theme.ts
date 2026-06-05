import {
  colors,
  spacing,
  radius,
  typography,
  shadows,
  gradients,
} from "./tokens";

export const defaultTheme = {
  colors,
  spacing,
  radius,
  typography,
  shadows,
  gradients,
  fontSize: 16,
};

export const darkTheme = {
  ...defaultTheme,

  colors: {
    ...colors,
    background: "#121212",
    surface: "#1E1E1E",
    text: "#FFFFFF",
    border: "#333333",
    primary: "#00A78E",
  },
};

export const highContrastTheme = {
  ...defaultTheme,

  colors: {
    ...colors,
    background: "#000000",
    surface: "#000000",
    text: "#FFFFFF",
    border: "#FFFFFF",
    primary: "#FFFF00",
  },
};