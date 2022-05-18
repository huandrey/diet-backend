-- CreateTable
CREATE TABLE "foods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL,
    "protein" INTEGER NOT NULL,
    "carbohydrate" INTEGER NOT NULL,
    "fat" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);
