import styled from "styled-components"

export default function Input() {
    return (
        <InputContainer/>
    )
}

const InputContainer = styled.input`
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