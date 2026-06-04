"use client";

import Link from "next/link";

import {
  Wrapper,
  Content,
  Logo,
  Nav,
} from "./Header.styles";

import {
  AccessibilityMenu,
} from "../AccessibilityMenu";

export function Header() {
  return (
    <header role="banner">
      <Wrapper>
        <Content>
          <Logo>
            Lacrei Saúde
          </Logo>

          <Nav aria-label="Navegação principal">
            <Link href="/">
              Home
            </Link>

            <Link href="/profissionais">
              Profissionais
            </Link>
          </Nav>

          <AccessibilityMenu />
        </Content>
      </Wrapper>
    </header>
  );
}