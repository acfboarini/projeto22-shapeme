import { useState } from "react";
import api from "../../api";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function TelaToday() {
    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();
    const [meals, setMeals]= useState([]);
    const [reload, setReload] = useState(true);

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

    return (
        <>
            <Header/>
            <Main>
                <section>
                    <article className="title">
                        <h1>Sua meta calorica diaria: </h1>
                        <Button onclick={() => {navigate("/create-meal")}}>+</Button>
                    </article>

                    <article>
                        {meals.length === 0?
                            <p>Voce não tem nenhuma refeição adicionada</p>:
                            meals.map(meal => {
                                return <></>
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