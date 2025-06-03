import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  padding: 24px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
`;

export const Content = styled.div``;