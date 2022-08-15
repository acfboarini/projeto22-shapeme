-- CreateTable
CREATE TABLE "foods" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "caloriesPerServing" INTEGER NOT NULL,
    "carboPorcentage" INTEGER NOT NULL,
    "proteinPorcentage" INTEGER NOT NULL,
    "fatPorcentage" INTEGER NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "foods_name_key" ON "foods"("name");
