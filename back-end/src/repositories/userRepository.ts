import { prisma } from "../database.js";

async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

async function getUserByUsername(username: string) {
    return await prisma.user.findUnique({
        where: {
            username
        }
    })
}

async function getUserByToken(token: string) {
    return await prisma.session.findUnique({
        where: {
            token
        },
        select: {
            user: true
        }
    })
}

async function updateUser(id: number, newData: any) {
    return await prisma.user.update({
        where: {id},
        data: newData
    })
}

const userRepository = {
    getUserByEmail, getUserByUsername, getUserByToken, updateUser
}

export default userRepository;