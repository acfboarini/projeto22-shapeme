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
    await prisma.mealFood.create({
        data: mealFoodData
    })
}

const mealFoodRepository = {
    getAll, insert, getByUserId
}

export default mealFoodRepository;