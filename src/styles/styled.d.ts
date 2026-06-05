import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      surface: string;
      primaryDark: string;
      background: string;
      text: string;
      success: string;
      error: string;
      border: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
    };

    typography: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
      small: string;
    };
    shadows: {
  sm: string;
  md: string;
};

gradients: {
  primary: string;
};

    fontSize: number;
  }
}