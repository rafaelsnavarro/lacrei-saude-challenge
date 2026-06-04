"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Container } from "./AccessibilityMenu.styles";
import { Button } from "../Button";
import { ThemeToggle } from "../ThemeToggle";

export function AccessibilityMenu() {
  const {
    toggleContrast,
    increaseFont,
    decreaseFont,
  } = useAccessibility();

  return (
    <Container aria-label="Configurações de acessibilidade">
      <Button
        variant="ghost"
        onClick={toggleContrast}
        ariaLabel="Ativar alto contraste"
      >
        ◐
      </Button>

      <Button
        variant="ghost"
        onClick={increaseFont}
        ariaLabel="Aumentar fonte"
      >
        A+
      </Button>

      <Button
        variant="ghost"
        onClick={decreaseFont}
        ariaLabel="Diminuir fonte"
      >
        A-
      </Button>

      <ThemeToggle />
    </Container>
  );
}