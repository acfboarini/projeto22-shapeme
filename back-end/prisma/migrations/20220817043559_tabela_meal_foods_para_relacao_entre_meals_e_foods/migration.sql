/*
  Warnings:

  - You are about to drop the column `amount` on the `meals` table. All the data in the column will be lost.
  - You are about to drop the column `foodName` on the `meals` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `meals` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_foodName_fkey";

-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_userId_fkey";

-- DropIndex
DROP INDEX "meals_foodName_key";

-- DropIndex
DROP INDEX "meals_userId_key";

-- AlterTable
ALTER TABLE "meals" DROP COLUMN "amount",
DROP COLUMN "foodName",
DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "MealFood" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "mealId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "MealFood_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MealFood_userId_key" ON "MealFood"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MealFood_foodId_key" ON "MealFood"("foodId");

-- AddForeignKey
ALTER TABLE "MealFood" ADD CONSTRAINT "MealFood_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealFood" ADD CONSTRAINT "MealFood_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealFood" ADD CONSTRAINT "MealFood_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
