import styled from "styled-components";

export const Wrapper =
  styled.header`

  width:100%;

  border-bottom:1px solid
    ${({ theme }) =>
      theme.colors.border};

  background:
    ${({ theme }) =>
      theme.colors.background};
`;

export const Content =
  styled.div`

  max-width:1200px;

  margin:auto;

  padding:
    ${({ theme }) =>
      theme.spacing.md};

  display:flex;

  align-items:center;

  justify-content:space-between;
`;

export const Logo =
  styled.h2`

  color:
    ${({ theme }) =>
      theme.colors.primary};

  font-weight:700;
`;

export const Nav =
  styled.nav`

  display:flex;

  gap:
    ${({ theme }) =>
      theme.spacing.lg};
`;