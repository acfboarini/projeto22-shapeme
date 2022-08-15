import { IoIosFitness } from "react-icons/io";
import styled from "styled-components";

export default function Logo() {
    return (   
        <LogoContainer>
            <IoIosFitness/>
            <h1>Shapeme</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.section`
    font-size: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    h1 {
        font-size: 50px;
        font-family: 'Orbitron', sans-serif;
    }
`