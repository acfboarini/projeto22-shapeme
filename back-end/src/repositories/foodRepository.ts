import { prisma } from "../database.js";
import { FoodData } from "../services/foodService.js";

async function insertFood(foodData: FoodData) {
    return await prisma.food.create({
        data: foodData
    })
}

export const foodRepository = {
    insertFood, 
}

export default foodRepository;