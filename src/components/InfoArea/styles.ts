import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    width: 90%
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-bottom: 16px;
    justify-content: center;
  }
`;
export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: row; 
    gap: 8px;
  }
`;

