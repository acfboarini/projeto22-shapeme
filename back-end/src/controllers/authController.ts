import { Request, Response } from "express";
import authRepository from "../repositories/authRepository.js";
import authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    try {
        const result = await authService.createUser(req.body);
        return res.status(201).send(result);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function signIn(req: Request, res: Response) {

    const { user } = res.locals;

    try {
        const sessionData = await authService.login(user);
        return res.status(201).send(sessionData);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function signOut(req: Request, res: Response) {

    const { token } = res.locals;

    try {
        await authRepository.deleteSession(token);
        return res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}