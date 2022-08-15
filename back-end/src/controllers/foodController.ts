
import { Request, Response } from "express";
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