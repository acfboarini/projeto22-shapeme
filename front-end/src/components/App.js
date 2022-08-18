import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Imports Telas */
import TelaLogin from "./telaLogin/TelaLogin";
import TelaCadastro from "./telaCadastro/TelaCadastro";
import TelaFoods from "./telaFoods/TelaFoods";
import TelaHome from "./telaHome/TelaHome";
import TelaToday from "./telaToday/TelaToday";
import CreateFood from "./createFood/CreateFood";
import CreateMeal from "./createMeal/CreateMeal";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin/>}></Route>
                <Route path="/sign-up" element={<TelaCadastro/>}></Route>
                <Route path="/home" element={<TelaHome/>}></Route>
                <Route path="/foods" element={<TelaFoods/>}></Route>
                <Route path="/create-food" element={<CreateFood/>}></Route>
                <Route path="/today" element={<TelaToday/>}></Route>
                <Route path="/create-meal" element={<CreateMeal/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}