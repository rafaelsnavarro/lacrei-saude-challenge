import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 24px;
  background: ${({ theme }) =>
    theme?.colors?.background ?? "#ffffff"};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  max-width: 760px;
  font-size: 2.25rem;
  line-height: 1.2;
  margin-bottom: 40px;
  color: ${({ theme }) =>
    theme?.colors?.text ?? "#1d1d1d"};

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
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
  padding: 32px 28px;
  min-height: 190px;
  border-radius: 16px;

  background: ${({ theme }) =>
    theme?.colors?.surface ?? "#ffffff"};

  border: 1px solid ${({ theme }) =>
    theme?.colors?.border ?? "#e5e7eb"};
  border-top: 5px solid #00a78e;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  span {
    font-size: 2rem;
    display: block;
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 12px;
    color: #00a78e;
    font-size: 1.25rem;
  }

  p {
    line-height: 1.7;
    color: ${({ theme }) =>
      theme?.colors?.text ?? "#1d1d1d"};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;