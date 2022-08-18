import styled from "styled-components";

export const Section = styled.section`
display: flex;
flex-direction: ${props => props.sectionAdd? "row": "column"};
justify-content: ${props => props.sectionAdd? "space-between": ""};
margin-top: ${props => props.buttonSection? "30px": "5px"};
width: 250px;
`;

export const Input = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
font-size: 20px;

::placeholder {
    font-size: 20px;
    color: #DBDBDB;
}
`;

export const Ul = styled.ul`
width: 250px;
`;

export const Li = styled.li`
background-color: rgb(82, 182, 255, 0.4);
text-align: center;
padding: 10px;
border-radius: 5px;
min-width: 250px;
position: relative;
margin: 5px 0px;
`;