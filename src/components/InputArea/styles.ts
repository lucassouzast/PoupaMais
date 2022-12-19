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

    #title{
        width: 12em;
    }

    #value{
        width: 10em;
    }
    
    #select{
        font-size:15px;
        text-align: justify;
    }

    .submit{
        padding: 0.3rem 1rem;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 17px;
        text-align: center;
        text-decoration: none;
        color: #000;
        border: 1px solid #000;
        border-radius: 1rem;
        cursor: pointer;
        background-color: #fff;
        position: relative;
        bottom: 6px;
    }

    .submit2{
        border-color: #000;
        transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
    
        :hover{
            transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    }
}

`;