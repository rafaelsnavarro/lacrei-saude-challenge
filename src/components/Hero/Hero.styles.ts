import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 96px 24px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #00a78e 0%,
    #0066cc 100%
  );
  color: #ffffff;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;

  display: grid;
  gap: 48px;
  align-items: center;

  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

export const TextContent = styled.div`
  max-width: 680px;
`;

export const Badge = styled.span`
  display: inline-flex;
  margin-bottom: 20px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  font-weight: 700;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 2.35rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  max-width: 620px;
  line-height: 1.7;
  margin-bottom: 32px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const VisualCard = styled.aside`
  padding: 40px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px);
`;

export const VisualCircle = styled.div`
  width: 72px;
  height: 72px;
  margin-bottom: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #00a78e;
  font-size: 2rem;
  font-weight: 800;
`;

export const VisualTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 12px;
`;

export const VisualText = styled.p`
  line-height: 1.7;
`;