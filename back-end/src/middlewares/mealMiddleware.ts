import { NextFunction, Request, Response } from "express";
import foodRepository from "../repositories/foodRepository.js";
import mealRepository from "../repositories/mealRepository.js";
import { mealSchema } from "../schemas/mealSchema.js";

export function validateMealSchema(req: Request, res: Response, next: NextFunction) {

    const validation = mealSchema.validate(req.body);
    console.log(validation);
    if (validation.error) {
        return res.status(400).send({error: validation.error.message});
    }

    next();
}

export async function validateUserMealName(req: Request, res: Response, next: NextFunction) {

    const {user} = res.locals;
    const {name} = req.body;

    const meal = await mealRepository.getByNameAndUserId(name, user.id)
    if (meal) return res.status(409).send("esta refeição ja existe no seu dia");

    next()
}

export async function validateExistFoods(req: Request, res: Response, next: NextFunction) {

    const { portions } = req.body;

    const listPortions = [];

    for (const portion of portions) {
        const food = await foodRepository.findByName(portion.name);
        if(!food) return res.status(404).send(`O alimento: ${portion.name} não esta registrado`);

        listPortions.push({
            foodId: food.id,
            amount: portion.amount
        })
    }

    res.locals.portions = listPortions;
    next();
}