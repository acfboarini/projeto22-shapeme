import { useState } from "react";
import api from "../../api";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Article, Button, H1, Input, Li, Main, P, Section, Ul } from "./styleHome.js";

export default function TelaHome() {
    const userJSON = window.localStorage.getItem("user");
    const {username, token} = JSON.parse(userJSON);

    const [goals, setGoals]= useState([]);
    const [reload, setReload] = useState(true);
    const [infosUser, setInfosUser] = useState({currentWeight: "", height: "", basalRate: ""});

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    if (reload) {
        api.get("user", config)
        .then(response => {
            const { currentWeight, height, basalRate } = response.data;
            setReload(false);
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
            console.log(err);
        });
    }

    return (
        <>
            <Header/>
            <Main>
                <Section>
                    <H1 titleText={true}>Informações do perfil:</H1>

                    {infosUser === {}?
                        <p>Carregando...</p>:
                        <Ul>
                            <Li>
                                <H1>Nome</H1>
                                <h2>{username}</h2>
                            </Li>
                            <Li>
                                <H1>Peso Atual(Kg)</H1>
                                <Input type="number"
                                    value={infosUser.currentWeight}
                                    onChange={e => setInfosUser({...infosUser, currentWeight: e.target.value})}
                                />
                            </Li>
                            <Li>
                                <H1>Altura(cm)</H1>
                                <Input type="number"
                                    value={infosUser.height}
                                    onChange={e => setInfosUser({...infosUser, height: e.target.value})}
                                />
                            </Li>
                            <Li>
                                <H1>Taxa Metabolica Basal</H1>
                                <Input type="number"
                                    value={infosUser.basalRate}
                                    onChange={e => setInfosUser({...infosUser, basalRate: e.target.value})}
                                />
                            </Li>
                            <Li>
                                <Button onClick={salvar} updateButton={true}>Atualizar</Button>
                            </Li>
                        </Ul> 
                    }   
                </Section>

                <Section>
                    <Article buttonArticle={true}>
                        <h1>Metas: </h1>
                        <Button>+</Button>
                    </Article>

                    <Article>
                        {goals.length === 0?
                            <P>Voce não tem nenhuma meta registrada ainda</P>:
                            goals.map(goal => {
                                return <></>
                            })
                        }
                    </Article>
                </Section>
            </Main>
            <Footer/>
        </>
    )
}
