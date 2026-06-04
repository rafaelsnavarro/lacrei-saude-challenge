"use client";
import Link from "next/link";

import {
  Container,
  Content,
  Title,
  Description,
  Actions,
} from "./Hero.styles";

import { Button } from "../Button";

export function Hero() {
  return (
    <Container>
      <Content>
        <Title>
          Saúde inclusiva para
          todas as pessoas
        </Title>

        <Description>
          Conectamos você a profissionais
          preparados para oferecer um
          atendimento seguro, acolhedor
          e respeitoso.
        </Description>

        <Actions>
          <Link href="/profissionais">
            <Button>
              Encontrar profissionais
            </Button>
          </Link>
        </Actions>
      </Content>
    </Container>
  );
}