import { Food } from "@prisma/client";
import foodRepository from "../repositories/foodRepository.js";

interface CreateFoodData {
    name: string,
    portion: number,
    kcal: number,
    carbo: number,
    protein: number,
    fat: number
}

export type FoodData = Omit <Food, "id">

async function createFood(data: CreateFoodData) {
    const { name, portion, kcal, carbo, protein, fat } = data;

    const foodData = {
        name,
        caloriesPerServing: calculateCaloriesPerServing(portion, kcal),
        carboPorcentage: calculateCarboPorcentage(portion, carbo),
        proteinPorcentage: calculateProteinPorcentage(portion, protein),
        fatPorcentage: calculateFatPorcentage(portion, fat),
    }

    return await foodRepository.insertFood(foodData);
}

function calculateCaloriesPerServing(portion: number, calories: number) {
    const caloriesPerServing = Math.round(calories/portion*1000);
    return caloriesPerServing;
}

function calculateCarboPorcentage(portion: number, carbo: number) {
    const carboPorcentage = (carbo/portion*100).toFixed(0);
    return parseInt(carboPorcentage);
}

function calculateProteinPorcentage(portion: number, protein: number) {
    const proteinPorcentage = (protein/portion*100).toFixed(0);
    return parseInt(proteinPorcentage);
}

function calculateFatPorcentage(portion: number, fat: number) {
    const fatPorcentage = (fat/portion*100).toFixed(0);
    return parseInt(fatPorcentage);
}


const foodService = {
    createFood, 
}

export default foodService;