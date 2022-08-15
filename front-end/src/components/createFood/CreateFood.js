import Footer from "../footer/Footer";
import Header from "../header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../api";

export default function CreateFood() {

    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);
    
    const [name, setName] = useState("");
    const [portion, setPortion] = useState("");
    const [kcal, setKcal] = useState("");
    const [carbo, setCarbo] = useState("");
    const [protein, setProtein] = useState("");
    const [fat, setFat] = useState("");

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    function registrar() {
        api.post("/foods", {
            name,
            portion,
            kcal,
            carbo,
            protein,
            fat
        }, config)
    }

    return (
        <>
            <Header/>
            <Main>
                <Input type="text" placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input type="number" placeholder="porção (g)"
                    value={portion}
                    onChange={e => setPortion(e.target.value)}
                />
                <Input type="number" placeholder="calorias (Kcal)"
                    value={kcal}
                    onChange={e => setKcal(e.target.value)}
                />
                <Input type="number" placeholder="carboidratos (g)"
                    value={carbo}
                    onChange={e => setCarbo(e.target.value)}
                />
                <Input type="number" placeholder="proteinas(g)"
                    value={protein}
                    onChange={e => setProtein(e.target.value)}
                />
                <Input type="number" placeholder="gorduras (g)"
                    value={fat}
                    onChange={e => setFat(e.target.value)}
                />
                <button onClick={registrar}>
                    <span>Registrar</span>
                </button>
                <Link to="/foods" style={{textDecoration: 'none'}}>
                    <p>Cancelar</p>
                </Link>    
            </Main>
        </>
    )
}

const Main = styled.main`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    padding: 15px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`

const Input = styled.input`
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