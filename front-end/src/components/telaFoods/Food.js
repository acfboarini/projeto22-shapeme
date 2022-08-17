import { IoTrashSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import api from "../../api";

export default function Food({food, config, setReload}) {
    
    function deleteFood(foodId) {
        api.delete(`/foods/${foodId}`, config)
        .then(response => {
            alert("Alimento deletado com sucesso");
            setReload(true);
        })
        .catch(err => console.log(err));
    }

    return (
        <Li>
            <H1>{food.name}</H1>
            <P><span>Calorias:</span> <span>{food.caloriesPerServing} calorias/g</span></P>
            <P><span>Carboidratos:</span> <span>{food.carboPorcentage}%</span></P>
            <P><span>Proteina:</span> <span>{food.proteinPorcentage}%</span></P>
            <P><span>Gorduras:</span> <span>{food.fatPorcentage}%</span></P>
            <Button type={"delete"} onClick={() => deleteFood(food.id)}><IoTrashSharp/></Button>
            <Button type={"edit"}><MdEdit/></Button>
        </Li>
    )
}

const Li = styled.li`
    margin: 20px 0px;
    background-color: rgb(82, 182, 255, 0.4);
    padding: 10px;
    border-radius: 5px;
    min-width: 250px;
    position: relative;
`;

const H1 = styled.h1`
    margin-bottom: 10px;
`;

const P = styled.p`
    margin-top: 5px;
    display: flex;
    alignt-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border-radius: 3px;
    background-color: white;
    position: absolute;
    top: 7px;
    right: ${props => props.type === "delete"? "7px": "30px"};
`;