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
  line-height:1.5;
}

.skip-link{
  position:absolute;
  left:-9999px;
  top:auto;
}

.skip-link:focus{
  left:1rem;
  top:1rem;

  z-index:9999;

  padding:12px 16px;

  background:#000;
  color:#fff;

  border-radius:4px;
}

a{
  text-decoration:none;
  color:inherit;
}

button{
  cursor:pointer;
}

img{
  max-width:100%;
  display:block;
}

ul,
ol{
  list-style:none;
}

*:focus-visible{
  outline:3px solid
    ${({ theme }) => theme.colors.primary};

  outline-offset:2px;
}
`;