import styled from "styled-components";

export const Container = styled.div<{ update?: boolean }>`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
  font-weight: 600;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
    gap: 8px;
    font-size: 13px;
  }
  ${({ update }) =>
    update &&
    ` 
      display: flex;
      flex-direction: row;
      margin-top: 50px;
    `}
`;

export const Label = styled.label<{ update?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  font-size: 15px;
  color: #333;
  font-weight: 500;

  ${({ update }) =>
    update &&
    ` 
    flex-wrap: wrap;
    flex-direction: row;
    gap: 16px;
    max-height: 150px;
    `}
`;

export const Input = styled.input`
  padding: 0.5rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  background: #f8f8f8;
  transition: border 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  height: 40px;

  &:focus {
    border: 1.5px solid #007bff;
    background: #f0f8ff;
  }

  &[type="date"] {
    background: #f0f4ff
      url('data:image/svg+xml;utf8,<svg fill="gray" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"/></svg>')
      no-repeat right 0.75em center/1.2em auto;
    cursor: pointer;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  background: #f8f8f8;
  transition: border 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  height: 40px;

  &:focus {
    border: 1.5px solid #007bff;
    background: #f0f8ff;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const Button = styled.button<{ variant?: "primary" | "danger" }>`
  height: 40px;
  padding: 0.5rem 0.8rem;
  margin-top: rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${({ variant }) =>
    variant === "danger" ? "#e74c3c" : "#007bff"};
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    background-color: ${({ variant }) =>
      variant === "danger" ? "#c0392b" : "#0056b3"};
    color: #fff;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    width: 100%;
    bottom: 0;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
  }
`;
