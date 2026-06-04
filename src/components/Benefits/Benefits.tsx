"use cliente";
import {
  Container,
  Content,
  Title,
  Cards,
  Card,
} from "./Benefits.styles";

const benefits = [
  {
    title: "Atendimento seguro",
    description:
      "Profissionais preparados para oferecer cuidado com respeito, escuta e acolhimento.",
  },
  {
    title: "Inclusão e diversidade",
    description:
      "Uma experiência pensada para que cada pessoa se sinta segura ao buscar cuidado.",
  },
  {
    title: "Conexão com profissionais",
    description:
      "Encontre profissionais alinhados às suas necessidades de saúde.",
  },
];

export function Benefits() {
  return (
    <Container aria-labelledby="benefits-title">
      <Content>
        <Title id="benefits-title">
          Por que escolher a Lacrei Saúde?
        </Title>

        <Cards>
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </Card>
          ))}
        </Cards>
      </Content>
    </Container>
  );
}