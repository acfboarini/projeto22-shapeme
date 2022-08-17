import { useState } from "react";
import api from "../../api";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Meal from "./Meal";

export default function TelaToday() {
    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();
    const [meals, setMeals]= useState([]);
    const [reload, setReload] = useState(true);

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    if (reload) {
        api.get("meals", config)
       .then(response => {
            setReload(false);
            setMeals(response.data);
       })
       .catch(err => {
            console.log("Erro ao buscar refeições");
       });
   }

    return (
        <>
            <Header/>
            <Main>
                <section>
                    <article className="title">
                        <h1>Sua meta calorica diaria: </h1>
                        <Button onclick={() => {navigate("/create-meal")}}>+</Button>
                    </article>

                    <ul>
                        {meals.lenght === 0?
                            <p>Voce não tem nenhuma refeição adicionada</p>:
                            meals.map(meal => {
                                return <Meal key={meal.id} meal={meal}/>
                            })
                        }
                    </ul>
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