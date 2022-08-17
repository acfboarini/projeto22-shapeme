import styled from "styled-components";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import api from "../../api";
 
export default function Header() {

    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    function logout() {
        window.localStorage.clear();
        navigate("/");
        api.delete("sign-out", config)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }

    return (
        <Navbar>
            <H2>Shapeme</H2>           
            <Button onClick={logout}><IoLogOutOutline/></Button>
        </Navbar>
    )
}

const Navbar = styled.header`
    z-index: 2;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #52B6FF;
    justify-content: space-around;
    width: 100%;
    font-size: 30px;
    position: fixed;
    left: 0;
    top: 0;
    padding: 10px;
`;

const H1 = styled.h1`
`;

const H2 = styled.h2`
    font-family: 'Orbitron', sans-serif;
`;

const Button = styled.button`
    border: none;
    font-size: 30px;
    background-color: rgb(82, 182, 255);
    display: flex;
    align-items: center;
    justify-content: center;
`
