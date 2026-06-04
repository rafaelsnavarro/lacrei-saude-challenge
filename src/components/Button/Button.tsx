"use client";

import {
  ButtonProps,
} from "./Button.types";

import {
  StyledButton,
} from "./Button.styles";

export function Button({
  children,
  variant = "primary",
  ariaLabel,
  ...rest
}: ButtonProps) {

  return (
    <StyledButton
      $variant={variant}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}