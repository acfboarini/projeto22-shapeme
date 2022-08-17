/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `meals` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `meals` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MealFood_foodId_key";

-- DropIndex
DROP INDEX "MealFood_userId_key";

-- DropIndex
DROP INDEX "meals_name_key";

-- DropIndex
DROP INDEX "sessions_userId_key";

-- AlterTable
ALTER TABLE "meals" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "meals_name_userId_key" ON "meals"("name", "userId");

-- AddForeignKey
ALTER TABLE "meals" ADD CONSTRAINT "meals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
