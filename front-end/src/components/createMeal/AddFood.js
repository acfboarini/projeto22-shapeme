import { useState } from "react";
import { Article } from "../telaHome/styleHome";
import { Input, Section, Select } from "./styleAddFood";

export default function AddFood({setAddFood, portions, setPortions, foods}) {

    const [foodName, setFoodName] = useState("");
    const [amount, setAmount] = useState("");

    function adicionar() {
        if (foodName !== "" && amount) {
            setPortions([...portions, {foodName, amount}]);
            setAddFood(false);
        } else {
            alert("Preencha todos os dados da porção");
        }
    }

    return (
        <Section>
            <Article>
                <h1>Alimento:</h1>
                <Select 
                    value={foodName}
                    onChange={e => setFoodName(e.target.value)}
                >
                    <option value={""}>Selecione</option>
                    {foods.map(food => {
                        return <option 
                            key={food.id}
                            value={food.name}
                        >{food.name}</option>
                    })}
                </Select>
            </Article>

            <Article>
                <h1>Quantidade(g): </h1>
                <Input type="number" placeholder=""
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </Article>
            
            <Article buttonsArticle={true}>
                <button onClick={adicionar}>Adicionar</button>
                <button onClick={() => setAddFood(false)}>Cancelar</button>              
            </Article>       
        </Section>
    )
}
