import styled from "styled-components";

export const Container = styled.section`
  padding: 72px 24px;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Steps = styled.div`
  display: grid;
  gap: 24px;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Step = styled.article`
  padding: 24px;

  border-radius: 12px;

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.text};

  border: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    margin-bottom: 12px;
  }

  p {
    line-height: 1.6;
  }
`;

export const Number = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  border-radius: 50%;

  background: #00a78e;

  color: white;

  font-weight: 700;
`;