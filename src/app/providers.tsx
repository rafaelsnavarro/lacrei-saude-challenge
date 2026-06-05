"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import {
  AccessibilityProvider,
  useAccessibility,
} from "@/contexts/AccessibilityContext";

import {
  defaultTheme,
  darkTheme,
  highContrastTheme,
} from "@/styles/theme";

import { GlobalStyle } from "@/styles/GlobalStyle";
import { StyledComponentsRegistry } from "@/lib/StyledComponentsRegistry";

function ThemeWrapper({ children }: { children: ReactNode }) {
  const { darkMode, highContrast, fontSize } = useAccessibility();

  const selectedTheme = highContrast
    ? { ...highContrastTheme, fontSize }
    : darkMode
    ? { ...darkTheme, fontSize }
    : { ...defaultTheme, fontSize };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <AccessibilityProvider>
        <ThemeWrapper>{children}</ThemeWrapper>
      </AccessibilityProvider>
    </StyledComponentsRegistry>
  );
}