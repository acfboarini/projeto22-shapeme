import { Request, Response } from "express";
import mealService from "../services/mealService.js";

export async function getMeals(req: Request, res: Response) {

    const {user} = res.locals;

    try {
        const meals = await mealService.getMeals(user.id);
        return res.status(200).send(meals);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function createMeal(req: Request, res: Response) {

    const { name } = req.body;
    const { user, portions } = res.locals;

    try {
        const result = await mealService.createMeal(name, user.id, portions);
        return res.status(200).send(result);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getTotalCalories(req: Request, res: Response) {

    const { user } = res.locals;

    try {
        const totalCalories = await mealService.getTotalCalories(user.id);
        return res.status(200).send({totalCalories});

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteMeal(req: Request, res: Response) {

    const { mealId } = req.params;

    try {
        await mealService.deleteMeal(Number(mealId));
        return res.status(200).send("Refeição deletada com sucesso");

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}