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
    text: "#FFFFFF",
  },
};

export const highContrastTheme = {
  ...defaultTheme,

  colors: {
    ...colors,
    background: "#000000",
    text: "#FFFFFF",
    primary: "#FFFF00",
  },
};