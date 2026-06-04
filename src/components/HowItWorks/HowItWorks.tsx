"use client";
import {
  Container,
  Content,
  Title,
  Steps,
  Step,
  Number,
} from "./HowItWorks.styles";

const steps = [
  {
    number: "01",
    title: "Busque um profissional",
    description:
      "Encontre especialistas preparados para oferecer um atendimento acolhedor.",
  },
  {
    number: "02",
    title: "Agende sua consulta",
    description:
      "Escolha o melhor horário para receber o cuidado que você procura.",
  },
  {
    number: "03",
    title: "Receba atendimento",
    description:
      "Tenha uma experiência segura, respeitosa e inclusiva.",
  },
];

export function HowItWorks() {
  return (
    <Container>
      <Content>
        <Title>
          Como funciona
        </Title>

        <Steps>
          {steps.map((step) => (
            <Step key={step.number}>
              <Number>
                {step.number}
              </Number>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </Step>
          ))}
        </Steps>
      </Content>
    </Container>
  );
}