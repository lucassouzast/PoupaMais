import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow:  0px 0px 5px #ccc;
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
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 15px;
    color: #333;
    font-weight: 500;
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

    &:focus {
        border: 1.5px solid #007bff;
        background: #f0f8ff;
    }

    &[type="date"] {
        background: #f0f4ff url('data:image/svg+xml;utf8,<svg fill="gray" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"/></svg>') no-repeat right 0.75em center/1.2em auto;
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
    font-size: 15px;
    text-align: justify;
    padding: 0.5rem 0.8rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f8f8f8;
    font-family: "Poppins", sans-serif;
    transition: border 0.2s;

    &:focus {
        border: 1.5px solid #007bff;
        background: #f0f8ff;
    }

    @media (max-width: 600px) {
        width: 100%;
        font-size: 15px;
    }
`;

export const Button = styled.button`
    padding: 0.3rem 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    background-color: #007bff;
    position: relative;
    bottom: 6px;
    transition: background 0.2s, color 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);

    &:hover {
        background-color: #0056b3;
        color: #fff;
    }

    @media (max-width: 600px) {
        font-size: 15px;
        width: 100%;
        bottom: 0;
        padding: 0.5rem 0;
    }
`;