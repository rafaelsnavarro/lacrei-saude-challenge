"use client";

import Link from "next/link";

import {
  Container,
  Content,
  TextContent,
  Badge,
  Title,
  Description,
  Actions,
  VisualCard,
  VisualCircle,
  VisualTitle,
  VisualText,
} from "./Hero.styles";

import { Button } from "../Button";

export function Hero() {
  return (
    <Container aria-labelledby="hero-title">
      <Content>
        <TextContent>
          <Badge>Cuidado seguro e inclusivo</Badge>

          <Title id="hero-title">
            Olá, você está na Lacrei Saúde!
          </Title>

          <Description>
            Conectamos pessoas a profissionais de saúde qualificados,
            proporcionando experiências de cuidado seguras, inclusivas
            e acolhedoras.
          </Description>

          <Actions>
            <Link href="/profissionais">
              <Button ariaLabel="Buscar profissionais de saúde">
                Buscar profissionais
              </Button>
            </Link>
          </Actions>
        </TextContent>

        <VisualCard aria-label="Resumo dos pilares da Lacrei Saúde">
          <VisualCircle>+</VisualCircle>

          <VisualTitle>
            Inclusão, acolhimento e segurança
          </VisualTitle>

          <VisualText>
            Uma plataforma pensada para que cada pessoa se sinta respeitada
            ao buscar cuidado.
          </VisualText>
        </VisualCard>
      </Content>
    </Container>
  );
}