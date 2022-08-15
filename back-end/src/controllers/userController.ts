import { Request, Response } from "express";
import authRepository from "../repositories/authRepository.js";
import userRepository from "../repositories/userRepository.js";
import authService from "../services/authService.js";

export async function getInfosUser(req: Request, res: Response) {

    const { user } = res.locals;

    try {
        const result = await userRepository.getUserByUsername(user.username);
        return res.status(200).send(result);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function updateInfosUser(req: Request, res: Response) {

    const { user } = res.locals;

    let {currentWeight, height, basalRate} = req.body;
    const newData = {
        currentWeight: parseInt(currentWeight),
        height: parseInt(height),
        basalRate: parseInt(basalRate)
    }

    try {
        const result = await userRepository.updateUser(user.id, newData);
        return res.status(200).send({message: "dados alterados com sucesso"});

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}