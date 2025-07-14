import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Container = styled.div<{ $open: boolean }>`
  height: 100vh;
  width: ${(props) => (props.$open ? "260px" : "80px")};
  transition: width 0.3s ease;
  background-color: #002516;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Label = styled.span<{ $delay: number }>`
  opacity: 0;
  transform: translateX(-10px);
  animation: fadeIn 0.3s ease forwards;
  animation-delay: ${(props) => props.$delay}ms;
  white-space: nowrap;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const buttonStyle = `
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  min-height: 48px;
  box-sizing: border-box;
`;

export const IconWrapper = styled.div`
  min-width: 36px;
  display: flex;
  justify-content: center;
`;

export const HomeButton = styled.button`
  ${buttonStyle}
  margin-top: 30px;
`;
export const ChartsButton = styled.button`
  ${buttonStyle}
`;
export const AccountButton = styled.button`
  ${buttonStyle}
`;
export const LogoutButton = styled.button`
  ${buttonStyle}
  border-top: 1px solid #fff;
  margin-top: 32px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const DrawerButton = styled.div`
  ${buttonStyle}
  height: 50px;
  margin-top: 20px;
`;
export const DrawerMenu = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: 60px;
  left: 20px;
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const StyledIcon = styled(Icon)``;
