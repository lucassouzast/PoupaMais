import styled from "styled-components";

export const PwaPromptWrapper = styled.div<{ $show?: boolean }>`
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%) translateY(${props => (props.$show ? "0" : "-32px")});
  opacity: ${props => (props.$show ? 1 : 0)};
  max-width: 340px;
  background: #fffbe6;
  color: #2c6e49;
  border: 1.5px solid #2c6e49;
  border-radius: 12px;
  padding: 16px 24px 16px 16px;
  text-align: center;
  z-index: 1000;
  box-shadow: 0 2px 16px #2c6e4922;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  transition: opacity 0.4s, transform 0.4s;
`;

export const PwaPromptClose = styled.button`
  background: transparent;
  border: none;
  color: #2c6e49;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 12px;
  line-height: 1;
  padding: 0;
`;

export const PwaPromptButton = styled.button`
  margin-top: 0;
  background: #2c6e49;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 700;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #3aafa9;
  }
`;