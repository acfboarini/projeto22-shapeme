import { Request, Response } from "express";
import foodRepository from "../repositories/foodRepository.js";
import foodService from "../services/foodService.js";

export async function createFood(req: Request, res: Response) {

    try {
        const result = await foodService.createFood(req.body);
        return res.status(200).send(result);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getFoods(req: Request, res: Response) {

    try {
        const foods = await foodRepository.getAll();
        return res.status(200).send(foods);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteFood(req: Request, res: Response) {

    const { foodId } = req.params;

    try {
        await foodRepository.deleteFoodById(Number(foodId));
        return res.status(200).send("Alimento deletado com sucesso");

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}