"use client";

import { useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

import { professionals } from "@/services/mockProfessionals";

import {
  Container,
  Intro,
  SearchInput,
  Grid,
  Card,
  EmptyMessage,
} from "./profissionais.styles";

export default function Profissionais() {
  const [search, setSearch] = useState("");

  const filteredProfessionals = professionals.filter((professional) => {
    const searchValue = search.toLowerCase();

    return (
      professional.name.toLowerCase().includes(searchValue) ||
      professional.specialty.toLowerCase().includes(searchValue) ||
      professional.city.toLowerCase().includes(searchValue)
    );
  });

  return (
    <>
      <Header />

      <main id="main-content">
        <Container>
          <Intro>
            <h1>Profissionais disponíveis</h1>

            <p>
              Encontre especialistas preparados para oferecer um atendimento
              seguro, acolhedor e inclusivo.
            </p>
          </Intro>

          <SearchInput
            type="search"
            placeholder="Buscar por nome, especialidade ou cidade"
            aria-label="Buscar profissional por nome, especialidade ou cidade"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {filteredProfessionals.length > 0 ? (
            <Grid>
              {filteredProfessionals.map((professional) => (
                <Card key={professional.id}>
                  <span aria-hidden="true">👩‍⚕️</span>

                  <h2>{professional.name}</h2>

                  <strong>{professional.specialty}</strong>

                  <p>{professional.city}</p>

                  <Button ariaLabel={`Ver perfil de ${professional.name}`}>
                    Ver perfil
                  </Button>
                </Card>
              ))}
            </Grid>
          ) : (
            <EmptyMessage>
              Nenhum profissional encontrado para sua busca.
            </EmptyMessage>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}