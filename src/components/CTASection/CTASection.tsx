"use client";
import Link from "next/link";

import {
  Container,
  Content,
  Title,
  Description,
} from "./CTASection.styles";

import { Button } from "../Button";

export function CTASection() {
  return (
    <Container aria-labelledby="cta-title">
      <Content>
        <Title id="cta-title">
          Pronto para encontrar o cuidado que você merece?
        </Title>

        <Description>
          A Lacrei Saúde conecta você a profissionais preparados para oferecer um atendimento seguro, acolhedor e inclusivo.
        </Description>

        <Link href="/profissionais">
          <Button ariaLabel="Buscar profissionais de saúde">
            Buscar profissionais
          </Button>
        </Link>
      </Content>
    </Container>
  );
}