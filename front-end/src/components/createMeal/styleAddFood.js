import styled from "styled-components";

export const Article = styled.article`
display: flex;
justify-content: ${props => props.buttonsArticle? "center" : "space-between"};;
align-items: center;
margin-bottom: 5px;
width: 100%;
`;

export const Input = styled.input`
background: #FFFFFF;
width: 100px;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
font-size: 20px;
`;

export const Select = styled.select`
width: 100px;
background-color: white;
`;

export const Section = styled.section`
margin: 5px;
width: 250px;
background-color: rgb(82, 182, 255, 0.6);
padding: 10px;
border-radius: 5px;
`;