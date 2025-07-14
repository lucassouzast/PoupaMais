import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #1a3c2c 0%, #2c6e49 40%, #3aafa9 100%);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  padding: 32px 0 64px 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 32px 0 16px 0;
  }
`;

export const HeaderText = styled.h1`
  color: #111;
  font-family: "Montserrat", sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Body = styled.main`
  background: #f6fff8;
  flex: 1;
  border-radius: 32px 32px 0 0;
  margin: 0 auto;
  width: 100%;
  max-width: 980px;
  min-height: 70vh;
  box-shadow: 0 0 32px #2c6e4922;
  padding: 32px 16px 48px 16px;
  margin-top: -32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  align-items: center;

  @media (max-width: 900px) {
    border-radius: 0;
    margin-top: 0;
    padding: 16px 4px 32px 4px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg text {
    fill: #111 !important;
    color: #111 !important;
    transition: fill 0.2s;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: #fff;
  color: #111;
  border: 1.5px solid #2c6e49;
  border-radius: 8px;
  padding: 10px 22px 10px 16px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px #2c6e4911;
  z-index: 10;
  transition: background 0.2s, color 0.2s, border 0.2s;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #f6fff8;
    color: #2c6e49;
    border-color: #3aafa9;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #2c6e49;
    transition: fill 0.2s;
  }

  &:hover svg {
    fill: #3aafa9;
  }

  @media (max-width: 600px) {
    top: -10px;
    right: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
  }
`;
