/*
  Warnings:

  - You are about to drop the `MealFood` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MealFood" DROP CONSTRAINT "MealFood_foodId_fkey";

-- DropForeignKey
ALTER TABLE "MealFood" DROP CONSTRAINT "MealFood_mealId_fkey";

-- DropForeignKey
ALTER TABLE "MealFood" DROP CONSTRAINT "MealFood_userId_fkey";

-- DropTable
DROP TABLE "MealFood";

-- CreateTable
CREATE TABLE "mealFoods" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "mealId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "mealFoods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mealFoods" ADD CONSTRAINT "mealFoods_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealFoods" ADD CONSTRAINT "mealFoods_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealFoods" ADD CONSTRAINT "mealFoods_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
