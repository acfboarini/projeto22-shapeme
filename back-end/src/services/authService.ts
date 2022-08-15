import { Session, User } from "@prisma/client";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";
import dayjs from "dayjs";

export type CreateUserData = Omit<User, "id">;
export type CreateSessionData = Omit<Session, "id">;

async function createUser(createUserData: CreateUserData) {

    let { username, email, password, birthDate, image, currentWeight, height, basalRate } = createUserData;
    const passwordHash = bcrypt.hashSync(password, 10);
    
    birthDate = dayjs(birthDate).format('YYYY-MM-DDTHH:mm:ss');

    const userData = {
        username,
        email,
        password: passwordHash,
        birthDate,
        image,
        currentWeight,
        height,
        basalRate
    }
    return await authRepository.insertUser(userData);
}

async function login(user: User) {
    
    const token = uuid();

    const sessionData = {
        userId: user.id,
        token
    } 
    await authRepository.insertSession(sessionData);
    return { username: user.username, ...sessionData };
}

const authService = {
    createUser, login,
}

export default authService;