import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: #f5f6fa;
    display: flex;
    flex-direction: column;
    overflow-x: auto;


    @media (max-width: 600px) {
        min-height: 100vh;
        padding: 0;
        overflow-x: auto;

    }
`;

export const Header = styled.div`
    background-color: darkblue;
    height: 100%;
    text-align: center;

    @media (max-width: 600px) {
        height: 100px;
        width: 100%;
    }
`;

export const HeaderText = styled.h1`
    margin: 10px 10px;
    font-size: 2.5rem;
    font-weight: 600;
    padding: 10px 0;
    padding-top: 30px;
    color: #fff;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        padding-top: 18px;
    }
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
    margin-top: 1px;
    overflow-x: auto;


    @media (max-width: 600px) {
        max-width: 98vw;
        padding: 0 8px;
        margin-top: 20px
        overflow-x: auto;

    }
`;