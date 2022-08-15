import { useState } from "react";
import styled from "styled-components";
import api from "../../api";
import Goal from "../goal/Goal";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./telaHome.css";

export default function TelaHome() {
    const userJSON = window.localStorage.getItem("user");
    const {name, token} = JSON.parse(userJSON);

    const [goals, setGoals]= useState([]);
    const [reload, setReload] = useState(true);
    const [reload2, setReload2] = useState(true);
    const [infosUser, setInfosUser] = useState({});

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    /*if (reload) {
        api.get("goals", config)
       .then(response => {
           setReload(false);
           setGoals(response.data);
       })
       .catch(err => {
           console.log("Erro ao buscar metas");
       });
   }*/

    if (reload2) {
        api.get("user", config)
        .then(response => {
            const { currentWeight, height, basalRate } = response.data;
            setReload2(false);
            setInfosUser({currentWeight, height, basalRate});
        })
        .catch(err => {
            console.log("Erro ao buscar informacoes do usuario");
        });
    }

    function salvar() {
        api.put("user", infosUser, config)
        .then(response => {
            console.log(response.data);
            alert("dados alterados com sucesso!");
        })
        .catch(err => {
            console.log("Erro ao atualizar dados");
        });
    }

    return (
        <>
            <Header/>
            <Main>
                <section>
                    <h1>Informações do perfil:</h1>

                    <article>
                        <h2>Peso Atual: (Kg)</h2>
                        <input type="number"
                            value={infosUser.currentWeight}
                            onChange={e => setInfosUser({...infosUser, currentWeight: e.target.value})}
                        />

                        <h2>Altura: (cm)</h2>
                        <input type="number"
                            value={infosUser.height}
                            onChange={e => setInfosUser({...infosUser, height: e.target.value})}
                        />

                        <h2>Taxa Metabolica Basal: </h2>
                        <input type="number"
                            value={infosUser.basalRate}
                            onChange={e => setInfosUser({...infosUser, basalRate: e.target.value})}
                        />

                        <Button onClick={salvar}>
                            <span>Salvar</span>
                        </Button>
                    </article>    
                </section>

                <section>
                    <article className="title">
                        <h1>Metas: </h1>
                        <Button>+</Button>
                    </article>

                    <article>
                        {goals.length === 0?
                            <p>Voce não tem nenhuma meta registrada</p>:
                            goals.map(goal => {
                                return <Goal/>
                            })
                        }
                    </article>
                </section>
            </Main>
            <Footer/>
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

const Button = styled.button`
    display: block;
`;