import { IoTrashSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import api from "../../api";

export default function Meal({meal, setReload, config}) {

    const { id, name, mealFood: portions } = meal;


    function deleteMeal(mealdId) {
        api.delete(`/meals/${mealdId}`, config)
        .then(response => {
            alert("Refeição deletada com sucesso");
            setReload(true);
        })
        .catch(err => console.log(err));
    }

    return (
        <Li>
            <H1>{name}</H1>
            <ul>
                {portions.map((portion, index) => {
                    const { amount, food } = portion;
                    const { name } = food;
                    return (
                        <Li key={index}>porção: {amount}g de {name}</Li>
                    )
                })}
            </ul>
            <Button type={"delete"} onClick={() => deleteMeal(id)}><IoTrashSharp/></Button>
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