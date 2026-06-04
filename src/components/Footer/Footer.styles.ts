import styled from "styled-components";

export const Wrapper =
  styled.footer`

  margin-top:auto;

  padding:
    ${({ theme }) =>
      theme.spacing.xl};

  text-align:center;

  border-top:1px solid
    ${({ theme }) =>
      theme.colors.border};
`;