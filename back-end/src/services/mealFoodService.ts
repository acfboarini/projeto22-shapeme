import { MealFood } from "@prisma/client";
import mealFoodRepository from "../repositories/mealFoodRepository.js";

export type CreateMealFoodData = Omit<MealFood, "id">


async function createManyMealFood(portions: any, userId: number, mealId: number) {

    for (const portion of portions) {
        const mealFoodData = <CreateMealFoodData> {
            ...portion,
            userId,
            mealId
        }
        await mealFoodRepository.insert(mealFoodData);
    }
    return;
}

const mealFoodService = {
    createManyMealFood, 
}

export default mealFoodService;