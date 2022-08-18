import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import Logo from "./../logo/Logo";
import { Button, Input, Main, Section } from "../telaLogin/styleLogin";

export default function TelaCadastro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [currentWeight, setCurrentWeight] = useState("");
    const [height, setHeight] = useState("");

    const navigate = useNavigate();

    function cadastrar() {
        const promise = api.post("sign-up", {
            email,
            username,
            password,
            birthDate,
            currentWeight: parseInt(currentWeight),
            height: parseInt(height),
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
        <Main>
            <Logo/>
            <Section>
                <Input type="text" placeholder="nome de usuario"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
                <Input type="text" placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <Input type="date" placeholder="data de nascimento"
                    onChange={e => setBirthDate(e.target.value)}
                    value={birthDate}
                />
                <Input type="number" placeholder="peso atual(kg)"
                    onChange={e => setCurrentWeight(e.target.value)}
                    value={currentWeight}
                />
                <Input type="number" placeholder="altura (cm)"
                    onChange={e => setHeight(e.target.value)}
                    value={height}
                />
                <Input type="password" placeholder="senha"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <Button onClick={cadastrar}>
                    <span>Cadastrar</span>
                </Button>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <p>Jé tem uma conta? Faça login</p>
                </Link>
            </Section>
        </Main>
    )
}