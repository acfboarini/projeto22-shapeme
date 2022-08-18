import { NextFunction, Request, Response } from "express";
import foodRepository from "../repositories/foodRepository.js";
import mealRepository from "../repositories/mealRepository.js";

export function validateMealSchema(req: Request, res: Response, next: NextFunction) {

    const { name, portions } = req.body;
    if (!name) {
        return res.status(400).send({error: "insira um nome para sua refeição"});
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
        const food = await foodRepository.findByName(portion.foodName);
        if(!food) return res.status(404).send(`O alimento: ${portion.foodName} não esta registrado`);

        listPortions.push({
            foodId: food.id,
            amount: Number(portion.amount)
        })
    }

    res.locals.portions = listPortions;
    next();
}