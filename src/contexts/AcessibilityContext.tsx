"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface AccessibilityContextData {
  darkMode: boolean;
  highContrast: boolean;
  fontSize: number;

  toggleDarkMode: () => void;
  toggleContrast: () => void;

  increaseFont: () => void;
  decreaseFont: () => void;
}

const AccessibilityContext =
  createContext({} as AccessibilityContextData);

export function AccessibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [darkMode, setDarkMode] =
    useState(false);

  const [highContrast, setHighContrast] =
    useState(false);

  const [fontSize, setFontSize] =
    useState(16);

  const toggleDarkMode = () =>
    setDarkMode(prev => !prev);

  const toggleContrast = () =>
    setHighContrast(prev => !prev);

  const increaseFont = () =>
    setFontSize(prev => prev + 2);

  const decreaseFont = () =>
    setFontSize(prev =>
      Math.max(prev - 2, 12)
    );

  return (
    <AccessibilityContext.Provider
      value={{
        darkMode,
        highContrast,
        fontSize,

        toggleDarkMode,
        toggleContrast,

        increaseFont,
        decreaseFont,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () =>
  useContext(AccessibilityContext);