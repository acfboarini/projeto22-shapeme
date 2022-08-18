import styled from "styled-components";

export const Main = styled.main`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    padding: 15px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`;

export const Button = styled.button`
    display: block;
    width: ${props => props.updateButton? "100%" : ""};
`;

export const Section = styled.section`
    width: 250px;
    margin-top: 15px;
`;

export const Li = styled.li`
    margin: 15px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Article = styled.article`
    display: flex;
    flex-direction: ${props => props.buttonArticle? "row" : "column"};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

export const Ul = styled.ul`
    width: 100%;
`;

export const Input = styled.input`
    max-width: 50px;
`;

export const P = styled.p`
    color: #b6b6b6;
    text-align: center;
`;

export const H1 = styled.h1`
    font-weight: 700;
    font-size: ${props => props.titleText? "20px" : ""};
`;
