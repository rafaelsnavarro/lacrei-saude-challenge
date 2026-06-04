import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 80px 24px;

  display: flex;
  justify-content: center;

  background:
    linear-gradient(
      135deg,
      #00A78E 0%,
      #0066CC 100%
    );

  color: white;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  max-width: 700px;

  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;

  max-width: 600px;

  line-height: 1.6;

  margin-bottom: 32px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
`;