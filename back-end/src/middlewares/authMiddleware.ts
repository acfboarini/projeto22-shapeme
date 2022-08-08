import { NextFunction, Request, Response } from "express";
import userRepository from "../repositories/userRepository.js";
import { signUpSchema, signInSchema } from "../schemas/authSchema.js";
import bcrypt from "bcrypt";

export function validateSignUpSchema(req: Request, res: Response, next: NextFunction) {

    const validation = signUpSchema.validate(req.body);
    if (validation.error) {
        return res.status(404).send({error: validation.error.message});
    }

    next();
}

export function validateSignInSchema(req: Request, res: Response, next: NextFunction) {

    const validation = signInSchema.validate(req.body);
    if (validation.error) {
        return res.status(404).send({error: validation.error.message});
    }

    next();
}

export async function validateSignUpData(req: Request, res: Response, next: NextFunction) {

    const { email } = req.body;

    const user = await userRepository.getUserByEmail(email);
    if (user) return res.sendStatus(409);

    next();
}

export async function validateSignInData(req: Request, res: Response, next: NextFunction) {

    const { email, password } = req.body;

    const user = await userRepository.getUserByEmail(email);
    if (!user) return res.status(404).send("Usuario não existe para esse email");

    const passwordValidation = bcrypt.compareSync(password, user.password);
    if (passwordValidation) {
        res.locals.user = user;
        next();
    } else {
        return res.status(422).send("Senha Incorreta");
    }
}

export async function authorization(req: Request, res: Response, next: NextFunction) {

    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer", "").trim();
    if (!token) return res.sendStatus(403);

    const result = await userRepository.getUserByToken(token);
    if (!result) return res.sendStatus(401);

    res.locals.token = token;
    res.locals.user = result.user;

    next();
}