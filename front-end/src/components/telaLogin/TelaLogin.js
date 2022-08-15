import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import api from "../../api";
import styled from "styled-components";

import Logo from "./../logo/Logo";

import "./login.css";

export default function TelaLogin() {

    window.localStorage.clear();

    const [email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const navigate = useNavigate();

    function login() {

        api.post("sign-in", {
            email: email,
            password: senha
        })
        .then(response => {
            const { data } = response;
            console.log(data);
            window.localStorage.setItem("user", JSON.stringify(data));
            navigate("/home");
        })
        .catch(err => {
            console.log(err);
            console.log("usuario não existe");
        });
    }

    return (
        <Main className="auth">
            <Logo/>
            <section className="registros">
                <input type="text" placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button onClick={login}>
                    <span>Entrar</span>
                </button>
                <Link to="/sign-up" style={{textDecoration: 'none'}}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </section>
        </Main>
    );
}

const Main = styled.main`
    margin: 0;
    height: 100vh;
`;