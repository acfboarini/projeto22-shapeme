import { NextFunction, Request, Response } from "express";
import { foodSchema } from "../schemas/foodSchema.js";

export function validateFoodSchema(req: Request, res: Response, next: NextFunction) {

    const validation = foodSchema.validate(req.body);
    console.log(validation);
    if (validation.error) {
        return res.status(400).send({error: validation.error.message});
    }

    next();
}