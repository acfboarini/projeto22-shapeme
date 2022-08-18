import styled from "styled-components";

export const Main = styled.main`
    margin: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 80px;
    margin-bottom: 70px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 4px;
    font-size: 20px;

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`;

export const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    margin-top: 4px;
    margin-bottom: 25px;

    span {
        font-size: 21px;
        text-align: center; 
        color: #FFFFFF;
        font-style: normal;
    }
`;