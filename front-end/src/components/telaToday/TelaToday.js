import { useState } from "react";
import api from "../../api";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import Meal from "./Meal";
import { Main } from "../telaHome/styleHome";
import { Button, H1, Section } from "./styleTelaToday";

export default function TelaToday() {
    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();
    const [totalCalories, setTotalCalories] = useState(0);
    const [meals, setMeals]= useState([]);
    const [reload, setReload] = useState(true);

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    if (reload) {
        api.get("meals", config)
       .then(response => {
            setMeals(response.data);
       })
       .catch(err => {
            console.log("Erro ao buscar refeições");
       });

       api.get("meals/totalCalories", config)
       .then(response => {
            setReload(false);
            setTotalCalories(response.data.totalCalories);
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
                    <H1>Sua meta calorica diaria: </H1>
                    <H1>Total de calorias ingeridas: {totalCalories}kcal</H1>
                </Section>
                <Section addMealSection={true}>
                    <h1>Refeições: </h1>
                    <Button onClick={() => {navigate("/create-meal")}}>+</Button>
                </Section>

                <ul>
                    {meals.lenght === 0?
                        <p>Voce não tem nenhuma refeição adicionada</p>:
                        meals.map(meal => {
                            return (
                                <Meal key={meal.id} 
                                    meal={meal}
                                    setReload={setReload}
                                    config={config}
                                />
                            )
                        })
                    }
                </ul>
            </Main>
            <Footer/>
        </>
    )
}
