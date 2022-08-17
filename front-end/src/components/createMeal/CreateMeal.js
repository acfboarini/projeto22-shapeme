import Header from "../header/Header";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";

export default function CreateMeal() {

    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [food, setFood] = useState("");
    const [amount, setAmount] = useState("");

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    function registrar() {
        api.post("/today", {
            name,
        }, config)
        .then(response => {
            alert("Alimento registrado com sucesso");
            navigate("/foods");
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Header/>
            <Main>
                <Article>
                    <h1>Nome: </h1>
                    <Input type="text" placeholder=""
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Article>
                <Article>
                    <h1>Porção(g): </h1>
                    <Input type="number" placeholder=""
                        value={food}
                        onChange={e => setFood(e.target.value)}
                    />
                </Article>
                <Article>
                    <h1>Calorias(kcal): </h1>
                    <Input type="number" placeholder=""
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </Article>
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
    font-size: 20px;

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`;

const Article = styled.article`
    display: flex;
    flex-direction: column;
    margin: 5px;
`