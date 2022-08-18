import Header from "../header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import { Article, Input, Main } from "./styleCreateFood";

export default function CreateFood() {

    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();
    
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
                        value={portion}
                        onChange={e => setPortion(e.target.value)}
                    />
                </Article>
                <Article>
                    <h1>Calorias(kcal): </h1>
                    <Input type="number" placeholder=""
                        value={kcal}
                        onChange={e => setKcal(e.target.value)}
                    />
                </Article>
                <Article>
                    <h1>Carboidratos(g): </h1>
                    <Input type="number" placeholder=""
                        value={carbo}
                        onChange={e => setCarbo(e.target.value)}
                    />
                </Article>
                <Article>
                    <h1>Proteinas(g): </h1>
                    <Input type="number" placeholder=""
                        value={protein}
                        onChange={e => setProtein(e.target.value)}
                    />
                </Article>
                <Article>
                <h1>Gorduras(g): </h1>
                    <Input type="number" placeholder=""
                        value={fat}
                        onChange={e => setFat(e.target.value)}
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