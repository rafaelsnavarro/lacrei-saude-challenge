"use client";

import { useAccessibility }
from "@/contexts/AccessibilityContext";

import { Button }
from "../Button";

export function ThemeToggle() {

  const {
    darkMode,
    toggleDarkMode,
  } = useAccessibility();

  return (
    <Button
      variant="ghost"
      onClick={toggleDarkMode}
      ariaLabel="Alternar tema"
    >
      {darkMode ? "☀️" : "🌙"}
    </Button>
  );
}