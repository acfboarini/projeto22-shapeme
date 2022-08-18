import { NextFunction, Request, Response } from "express";
import foodRepository from "../repositories/foodRepository.js";
import { foodSchema } from "../schemas/foodSchema.js";

export function validateFoodSchema(req: Request, res: Response, next: NextFunction) {

    const validation = foodSchema.validate(req.body);
    if (validation.error) {
        return res.status(400).send({error: validation.error.message});
    }

    next();
}

export async function validateFoodName(req: Request, res: Response, next: NextFunction) {

    const { name } = req.body;

    const food = await foodRepository.findByName(name);
    if (food) {
        return res.status(409).send("Este alimento ja existe");
    }
    next();
}