import { prisma } from "../database.js";

async function getAllFromUser(userId: number) {
    return await prisma.meal.findMany({
        where: {userId},
        select: {
            id: true,
            name: true,
            mealFood: {
                select: {
                    amount: true,
                    food: {
                        select: {
                            name: true,
                            caloriesPerServing: true,
                            carboPorcentage: true,
                            proteinPorcentage: true,
                            fatPorcentage: true,
                        }
                    }
                }
            }
            
        },
    })
}

async function insert(name: string, userId: number) {
    await prisma.meal.create({
        data: {name, userId}
    })
}

async function getByNameAndUserId(name: string, userId: number) {
    return await prisma.meal.findFirst({
        where: {name, userId}
    })
}

const mealRepository = {
    getAllFromUser, insert, getByNameAndUserId 
}

export default mealRepository;