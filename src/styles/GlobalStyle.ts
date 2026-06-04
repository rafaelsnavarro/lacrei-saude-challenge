"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  background:${({ theme }) => theme.colors.background};
  color:${({ theme }) => theme.colors.text};
  font-size:${({ theme }) => theme.fontSize}px;
  font-family:Arial, sans-serif;
}

a{
  text-decoration:none;
  color:inherit;
}

button{
  cursor:pointer;
}

*:focus-visible{
  outline:3px solid
  ${({ theme }) => theme.colors.primary};

  outline-offset:2px;
}
`;