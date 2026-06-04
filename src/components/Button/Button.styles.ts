import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background: ${({ theme }) =>
      theme.colors.primary};

    color: white;
  `,

  secondary: css`
    background: transparent;

    border: 2px solid
      ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) =>
      theme.colors.primary};
  `,

  ghost: css`
    background: transparent;
    color: ${({ theme }) =>
      theme.colors.text};
  `,
};

export const StyledButton =
  styled.button<{
    $variant: string;
  }>`

  min-height:48px;
  min-width:48px;

  padding:
    ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.lg};

  border:none;

  border-radius:
    ${({ theme }) => theme.radius.md};

  transition:.2s;

  ${({ $variant }) =>
    variants[
      $variant as keyof typeof variants
    ]}

  &:hover{
    opacity:.9;
  }

  &:disabled{
    opacity:.5;
    cursor:not-allowed;
  }
`;