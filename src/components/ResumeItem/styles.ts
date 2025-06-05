import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  color: #000;
  justify-content: space-between;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Info = styled.div<{ color?: string }>`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color ?? "#000"};
  font-size: 20px;
  word-break: break-all; // Permite quebra de números grandes
  overflow-wrap: anywhere; // Garante quebra em qualquer ponto se necessário

  @media (max-width: 600px) {
    font-size: 12px;
    word-break: break-all;
    overflow-wrap: anywhere;
  }
`;
