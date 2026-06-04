"use client";

import { ReactNode } from "react";

import { ThemeProvider }
from "styled-components";

import {
  AccessibilityProvider,
  useAccessibility,
} from "@/contexts/AccessibilityContext";

import {
  defaultTheme,
  darkTheme,
  highContrastTheme,
} from "@/styles/theme";

import { GlobalStyle }
from "@/styles/GlobalStyle";

function ThemeWrapper({
  children,
}: {
  children: ReactNode;
}) {

  const {
    darkMode,
    highContrast,
    fontSize,
  } = useAccessibility();

  const selectedTheme =
    highContrast
      ? {
          ...highContrastTheme,
          fontSize,
        }
      : darkMode
      ? {
          ...darkTheme,
          fontSize,
        }
      : {
          ...defaultTheme,
          fontSize,
        };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a
    href="#main-content"
    className="skip-link"
  >
    Pular para conteúdo principal
  </a>

        <AccessibilityProvider>

          <ThemeWrapper>
            {children}
          </ThemeWrapper>

        </AccessibilityProvider>

      </body>
    </html>
  );
}