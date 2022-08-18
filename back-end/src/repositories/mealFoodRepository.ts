import { prisma } from "../database.js";
import { CreateMealFoodData } from "../services/mealFoodService.js";

async function getAll() {
    return await prisma.mealFood.findMany({})
}

async function getByUserId(userId: number) {
    return await prisma.mealFood.findMany({
        where: {userId}
    })
}

async function insert(mealFoodData: CreateMealFoodData) {
    return await prisma.mealFood.create({
        data: mealFoodData
    })
}

async function deleteManyMealFoods(mealId: number) {
    return await prisma.mealFood.deleteMany({
        where: {mealId}
    })
}

const mealFoodRepository = {
    getAll, insert, getByUserId, deleteManyMealFoods
}

export default mealFoodRepository;