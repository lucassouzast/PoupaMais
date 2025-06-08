import styled from "styled-components";

// Paleta: verde escuro, verde claro, azul petróleo, branco e cinza suave
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
  background: linear-gradient(120deg, #1a3c2c 0%, #2c6e49 40%, #3aafa9 100%);

  @media (max-width: 900px) {
    flex-direction: column;
    background: #f6fff8;
  }
`;

export const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  height: 100vh;
  position: relative;
  z-index: 1;
  padding: 0;
  background: #f6fff8;
  overflow: hidden; /* Garante que o pseudo-elemento não vaze */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.92) saturate(1.1);
    border-radius: 0;
    transform: scaleX(-1);
    position: relative;
    z-index: 1;
  }

  /* Sombra interna suave para profundidade usando pseudo-elemento */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    box-shadow: inset 0 0 80px 32px rgba(30, 30, 30, 0.22);
    border-radius: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  min-width: 340px;
  max-width: 480px;
  background: linear-gradient(135deg, rgb(15, 51, 31) 0%, #2c6e49 60%, #3aafa9 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 2;
  position: relative;
  box-shadow: -180px 0 240px -32px rgba(44, 110, 73, 0.65);

  @media (max-width: 900px) {
    min-width: 100vw;
    max-width: 100vw;
    height: 100vh;
    box-shadow: none;
    background: #f6fff8;
    padding: 32px 0;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    width: 220px;
    height: 60px;
    // Aplica cor preta ao texto da logo no mobile
  }

  @media (max-width: 700px) {
    margin-bottom: 18px;
    svg {
      width: 140px;
      height: 40px;
    }
    text {
      fill: #111 !important; // Força o texto da logo para preto no mobile
      color: #111 !important;
    }
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 320px;
  background: #f6fff8;
  padding: 32px 24px;
  border-radius: 14px;
  box-shadow: 0 0 16px #3aafa933;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 500px) {
    padding: 20px 8px;
    min-width: unset;
    box-shadow: none;
    border-radius: 10px;
  }
`;

export const StyledInput = styled.input`
  padding: 14px 12px;
  border: 1.5px solid #b8e0d2;
  border-radius: 8px;
  font-size: 16px;
  background: #f6fff8;
  transition: border 0.2s, background 0.2s;
  &:focus {
    border-color: #3aafa9;
    background: #fff;
  }
`;

export const StyledButton = styled.button`
  padding: 14px;
  background: linear-gradient(90deg, #2c6e49 60%, #3aafa9 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 2px 8px #2c6e4933;
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: linear-gradient(90deg, #20613b 60%, #3aafa9 100%);
    box-shadow: 0 4px 16px #2c6e4955;
  }
`;
