import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 1000;

  border-bottom: 1px solid #e5e7eb;

  background: rgba(255, 255, 255, 0.96);

  backdrop-filter: blur(8px);
`;

export const Content = styled.div`
  max-width: 1200px;

  margin: 0 auto;

  padding: 18px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.h2`
  color: #00a78e;

  font-size: 1.5rem;
  font-weight: 800;

  letter-spacing: -0.02em;
`;

export const Nav = styled.nav`
  display: flex;

  align-items: center;

  gap: 32px;

  a {
    font-weight: 500;

    transition: color 0.2s ease;

    &:hover {
      color: #00a78e;
    }
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;