import { prisma } from "../database.js";
import { FoodData } from "../services/foodService.js";

async function insertFood(foodData: FoodData) {
    return await prisma.food.create({
        data: foodData
    })
}

async function getAll() {
    return await prisma.food.findMany({})
}

async function findByName(name: string) {
    return await prisma.food.findFirst({
        where: {name}
    })
}

async function deleteFoodById(id: number) {
    return await prisma.food.delete({
        where: {id}
    })
}

export const foodRepository = {
    insertFood, getAll, deleteFoodById, findByName
}

export default foodRepository;