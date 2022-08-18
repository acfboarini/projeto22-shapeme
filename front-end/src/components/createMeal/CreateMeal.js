import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import AddFood from "./AddFood";
import { Main } from "../telaHome/styleHome";
import { Input, Li, Section, Ul } from "./styleCreateMeal";

export default function CreateMeal() {

    const userJSON = window.localStorage.getItem("user");
    const { token } = JSON.parse(userJSON);

    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [portions, setPortions] = useState([]);
    const [addFood, setAddFood] = useState(false);
    const [foods, setFoods] = useState([]);
    const [reload, setReload] = useState(true);

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    if (reload) {
        api.get("/foods", config)
        .then(response => {
            setReload(false);
            setFoods(response.data);
        })
        .catch(err => console.log(err));
    }

    function registrar() {
        api.post("/meals", {
            name,
            portions
        }, config)
        .then(response => {
            alert("Refeição registrada com sucesso");
            navigate("/today");
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <Header/>
            <Main>
                <Section>
                    <h1>Nome da refeição: </h1>
                    <Input type="text" placeholder=""
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Section>
                <Section sectionAdd={true}>
                    <h1>Porções: </h1>
                    <button onClick={() => {setAddFood(true)}}>+</button>
                </Section>

                {addFood? 
                    <AddFood 
                        setAddFood={setAddFood}
                        portions={portions}
                        setPortions={setPortions}
                        foods={foods}
                    />:
                    <></>
                }

                <Ul>
                    {
                        portions.map((portion, index) => {
                            return <Li key={index}>
                                <p>{portion.amount}g de {portion.foodName}</p>
                            </Li>
                        })
                    }
                </Ul>

                <Section buttonSection={true}>
                    <button onClick={registrar}>Registrar</button>
                    <button onClick={() => {navigate("/today")}}>Cancelar</button>   
                </Section> 
            </Main>
        </>
    )
}
