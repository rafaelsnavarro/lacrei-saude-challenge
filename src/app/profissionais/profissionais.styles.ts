import styled from "styled-components";

export const Container = styled.section`
  padding: 72px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Intro = styled.div`
  max-width: 720px;
  margin-bottom: 32px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: #1d1d1d;
  }

  p {
    line-height: 1.7;
    color: #1d1d1d;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 560px;

  min-height: 48px;

  padding: 0 16px;

  margin-bottom: 40px;

  border: 1px solid #e5e7eb;

  border-radius: 12px;

  font-size: 1rem;

  &:focus {
    border-color: #00a78e;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.article`
  padding: 28px;

  border-radius: 16px;

  background: #ffffff;

  border: 1px solid #e5e7eb;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  span {
    display: block;
    font-size: 2rem;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 1.35rem;
    margin-bottom: 8px;
    color: #008c76;
  }

  strong {
    display: block;
    margin-bottom: 8px;
    color: #1d1d1d;
  }

  p {
    margin-bottom: 20px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const EmptyMessage = styled.p`
  padding: 24px;
  border-radius: 12px;
  background: #f5f7fa;
`;