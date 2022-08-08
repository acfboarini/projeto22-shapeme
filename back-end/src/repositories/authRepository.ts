import { prisma } from "../database.js";
import { CreateSessionData, CreateUserData } from "../services/authService.js";

async function insertUser(userData: CreateUserData) {
    return await prisma.user.create({
        data: userData
    })
}

async function insertSession(sessionData: CreateSessionData) {
    return await prisma.session.create({
        data: sessionData
    }) 
}

async function deleteSession(token: string) {
    return await prisma.session.delete({
        where: {
            token
        }
    })
}

export const authRepository = {
    insertUser, insertSession, deleteSession
}

export default authRepository;