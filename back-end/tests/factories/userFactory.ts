import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database.js";

export async function createUser() {

    const userData = {
        username: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthData: faker.date.birthdate().toString(),
        image: faker.image.imageUrl(),
        currentWeight: parseInt(faker.random.numeric(2)),
        height: parseInt(faker.random.numeric(3)),
        basalRate: parseInt(faker.random.numeric(4))
    }

    await prisma.user.create({
        data: userData
    })

    return userData;
}