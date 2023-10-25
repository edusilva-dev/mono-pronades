/*
  Warnings:

  - Added the required column `grenadeTypeId` to the `Grenade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grenade" ADD COLUMN     "grenadeTypeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "GrenadeType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "GrenadeType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Grenade" ADD CONSTRAINT "Grenade_grenadeTypeId_fkey" FOREIGN KEY ("grenadeTypeId") REFERENCES "GrenadeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
