import styled from "styled-components";

export const Container = styled.div<{ update?: boolean }>`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
    gap: 8px;
    font-size: 13px;
    width: 90%;
  }

  ${({ update }) =>
    update &&
    ` 
      flex-direction: row;
      margin-top: 50px;
      width: 100%;      // <- mantém a largura no update
    `}
`;

export const RowLabels = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  gap: 16px;

  @media (max-width: 600px) {
    margin-top: 15px;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const Label = styled.label<{ update?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 15px;
  color: #333;
  font-weight: 500;
  position: relative;

  flex: 1 1 150px; // tenta ocupar pelo menos 150px e expande se sobrar espaço
  min-width: 120px;

  ${({ update }) =>
    update &&
    ` 
      flex-wrap: wrap;
      flex-direction: row;
      gap: 16px;
      max-height: 150px;
    `}

  @media (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

export const ButtonLabel = styled.div`
  display: flex;
  flex: 0 0 auto; 
  align-items: flex-end; 
  margin-top: 24px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;


export const Select = styled.select`
  width: 100%; // ocupa o espaço do label
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  height: 40px;
  box-sizing: border-box;

  &:focus {
    border: 1.5px solid #007bff;
    background: #f0f8ff;
  }

  @media (max-width: 600px) {
    width: 100%;
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



export const Input = styled.input`
  width: 100%; // ocupa o espaço do label
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  height: 40px;
  box-sizing: border-box;

  &:focus {
    border: 1.5px solid #007bff;
    background: #f0f8ff;
  }

  @media (max-width: 600px) {
    width: 100%;
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

  &[type="color"] {
  padding: 0;        
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;   
  background: none;  
}

  &[type="color"]::-webkit-color-swatch-wrapper {
  padding: 2px;
}

&[type="color"]::-webkit-color-swatch {
  border-radius: 8px; 
  border: none;       
}


  @media (max-width: 600px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const Button = styled.button<{ variant?: "primary" | "danger" }>`
  padding: 0.5rem 0.8rem;
  max-width: 150px;
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
  border: none;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "danger" ? "#c0392b" : "#0056b3"};
    color: #fff;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    width: 100%;
    padding: 0.5rem 0;
    margin-top: 0.5rem;

  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  color: #000;
  list-style: none;
  padding: 4px 0;
  margin: 4px 0 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
`;

export const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #f0f0f0;
  }
`;
