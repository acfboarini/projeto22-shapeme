import { useState } from "react";
import api from "../../api";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import Food from "./Food";
import { Main } from "../telaHome/styleHome";
import { Section } from "./styleTelaFoods";
import { Button } from "../telaToday/styleTelaToday";

export default function TelaFoods() {
    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();
    const [foods, setFoods]= useState([]);
    const [reload, setReload] = useState(true);

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    if (reload) {
        api.get("foods", config)
       .then(response => {
            setReload(false);
            setFoods(response.data);
       })
       .catch(err => {
            console.log("Erro ao buscar alimentos");
       });
   }

    return (
        <>
            <Header/>
            <Main>
                <Section buttonAdd={true}>
                    <h1>Alimentos: </h1>
                    <Button onClick={() => navigate("/create-food")}>+</Button>
                </Section>

                <ul>
                    {foods.length === 0?
                        <p>Voce não tem nenhum alimento registrado</p>:
                        foods.map(food => {
                            return <Food key={food.id} 
                                food={food} 
                                config={config}
                                setReload={setReload}
                            />
                        })
                    }
                </ul>
            </Main>
            <Footer/>
        </>
    )
}