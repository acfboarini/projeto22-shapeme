import mealFoodRepository from "../repositories/mealFoodRepository.js";
import mealRepository from "../repositories/mealRepository.js";
import mealFoodService from "./mealFoodService.js";

export interface Portion {
    name: String,
    amount: Number
}

export interface MealData {
    name: String, 
    portions: Portion[]
}

async function createMeal(name: string, userId: number, portions: any) {
    await mealRepository.insert(name, userId);
    const meal = await mealRepository.getByNameAndUserId(name, userId);
    return await mealFoodService.createManyMealFood(portions, userId, meal.id);
}

async function getMeals(userId: number) {
    const meals = await mealRepository.getAllFromUser(userId);
    return meals;
}

async function getTotalCalories(userId: number) {
    const meals = await mealRepository.getAllFromUser(userId);
    const totalCalories = calculateTotalCalories(meals);
    return totalCalories;
}

function calculateTotalCalories(meals: any) {
    let totalCalories = 0;

    meals.forEach((meal: any) => {
        const mealCalories = calculateCaloriesPerMeal(meal);
        totalCalories += mealCalories;
    })

    totalCalories = Number((totalCalories/1000).toFixed(2));

    return totalCalories;
}

function calculateCaloriesPerMeal(meal: any) {
    let totalCalories = 0;
    const { mealFood: portions } = meal;

    portions.forEach((portion: any) => {
        const { amount, food } = portion;
        const foodCalories = portion.amount * portion.food.caloriesPerServing;
        totalCalories += foodCalories;
    })
    
    return totalCalories;
}

async function deleteMeal(mealId: number) {
    await mealFoodRepository.deleteManyMealFoods(mealId);
    await mealRepository.deleteMealById(mealId);
    return;
}

const mealService = {
    createMeal, getMeals, getTotalCalories, deleteMeal
}

export default mealService;