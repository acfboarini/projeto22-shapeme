import { Session, User } from "@prisma/client";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

export type CreateUserData = Omit<User, "id">;
export type CreateSessionData = Omit<Session, "id">;

async function createUser(createUserData: Partial<CreateUserData>) {

    const {username, email, password, image, currentWeight, height, basalRate} = createUserData;
    const passwordHash = bcrypt.hashSync(password, 10);

    const userData = {
        username,
        email,
        password: passwordHash,
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
        username: user.username,
        userId: user.id,
        token
    } 
    await authRepository.insertSession(sessionData);
    return sessionData;
}

const authService = {
    createUser, login,
}

export default authService;