import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import api from "../../api";

import Logo from "./../logo/Logo";

export default function TelaCadastro({salvarImagem}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [currentWeight, setCurrentWeight] = useState("");
    const [height, setHeight] = useState("");
    //const [basalRate, setBasalRate] = useState("");

    const navigate = useNavigate();

    function cadastrar() {
        const promise = api.post("sign-up", {
            email,
            username,
            image,
            password,
            birthDate,
            currentWeight: parseInt(currentWeight),
            height: parseInt(height),
            //basalRate
        });
        
        promise.then(response => {
            const {data} = response;
            console.log("cadastrado com sucesso", data);
            alert("cadastrado com sucesso");
            navigate("/");
        });
        promise.catch(err => {
            alert("Preencha os dados corretamente");
        });
    }

    return (
        <Main className="auth">
            <Logo/>
            <section className="registros">

                <input type="text" placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <input type="text" placeholder="nome de usuario"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
                <input type="text" placeholder="URL da foto"
                    onChange={e => setImage(e.target.value)}
                    value={image}
                />
                <input type="date" placeholder="data de nascimento"
                    onChange={e => setBirthDate(e.target.value)}
                    value={birthDate}
                />
                <input type="number" placeholder="peso atual(kg)"
                    onChange={e => setCurrentWeight(e.target.value)}
                    value={currentWeight}
                />
                <input type="number" placeholder="altura (cm)"
                    onChange={e => setHeight(e.target.value)}
                    value={height}
                />
                <input type="password" placeholder="senha"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <button onClick={cadastrar}>
                    <span>Cadastrar</span>
                </button>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <p>Jé tem uma conta? Faça login</p>
                </Link>
            </section>
        </Main>
    )
}

const Main = styled.main`
    margin: 0;
    height: 100vh;
`;