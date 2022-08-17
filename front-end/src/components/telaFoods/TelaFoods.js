import { useState } from "react";
import api from "../../api";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Food from "./Food";

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
                <section>
                    <article className="title">
                        <h1>Alimentos: </h1>
                        <button onClick={() => navigate("/create-food")}>+</button>
                    </article>

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