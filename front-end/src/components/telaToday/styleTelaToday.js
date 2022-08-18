import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: ${props => props.addMealSection? "row": "column"};
    align-items: ${props => props.addMealSection? "center": ""};
    justify-content: space-between;
    min-width: 250px;
    margin-top: ${props => props.addMealSection? "15px": ""};
`;

export const Button = styled.button`
    display: block;
`;

export const H1 = styled.h1`
    margin-top: 10px;
`;