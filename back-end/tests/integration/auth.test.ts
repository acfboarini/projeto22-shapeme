import supertest from "supertest";
import app from "../../src/app.js";
import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database.js";
import { createUser } from "../factories/userFactory.js";
import { deleteAllData } from "../factories/scenarioFactory.js";

describe("auth tests", () => {

    beforeEach(async () => {
        await deleteAllData();
    })

    const agent = supertest(app);

    it("should be insert user", async () => {
        const user = {
            username: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthData: faker.date.birthdate().toString(),
            image: faker.image.imageUrl(),
            currentWeight: parseInt(faker.random.numeric(2)),
            height: parseInt(faker.random.numeric(3)),
            basalRate: parseInt(faker.random.numeric(4))
        }

        const result = await agent.post("/sign-up").send(user);
        expect(result.statusCode).toEqual(201);

        // testando efeitos colaterais

        const userCreated = prisma.user.findUnique({
            where: {email: user.email}
        });
        expect(userCreated).not.toBeNull();
    })

    it("should be conflict with username", async () => {
        const userCreated = await createUser();

        const user = {
            username: userCreated.username,
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthData: faker.date.birthdate().toString(),
            image: faker.image.imageUrl(),
            currentWeight: parseInt(faker.random.numeric(2)),
            height: parseInt(faker.random.numeric(3)),
            basalRate: parseInt(faker.random.numeric(4))
        }

        const result = await agent.post("/sign-up").send(user);
        expect(result.statusCode).toEqual(409);
    })

    it("should be login", async () => {
        const user = await createUser();

        const loginData = {
            email: user.email,
            password: user.password
        };

        const result = await agent.post("/sign-in").send(loginData);
        console.log(result.text);
        console.log("result body:", result.body);
        expect(result.statusCode).toEqual(201);
    })

    afterAll(async () => {
        await deleteAllData();
    })
})