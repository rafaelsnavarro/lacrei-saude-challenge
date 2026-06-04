import styled from "styled-components";

export const Container = styled.section`
  padding: 72px 24px;
  background: #f5f7fa;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 32px;
  color: #1d1d1d;
`;

export const Cards = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.article`
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
  border-top: 4px solid #00a78e;

  h3 {
    margin-bottom: 12px;
    color: #008c76;
  }

  p {
    line-height: 1.6;
  }
`;