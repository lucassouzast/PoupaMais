import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  width: 280px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  color: #111;
`;

export const CardMonth = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #111;
`;

export const CardValue = styled.p<{ $color: "green" | "red"; $bold?: boolean }>`
  font-size: 18px;
  color: ${({ $color }) => ($color === "green" ? "#007f2e" : "#a83232")};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  margin-top: 4px;
`;