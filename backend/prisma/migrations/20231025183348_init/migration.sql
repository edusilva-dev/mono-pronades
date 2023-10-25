-- CreateTable
CREATE TABLE "Map" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grenade" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pixelUrl" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "mapId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "movementId" TEXT NOT NULL,
    "techniqueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grenade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movement" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Movement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technique" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Technique_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Grenade" ADD CONSTRAINT "Grenade_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grenade" ADD CONSTRAINT "Grenade_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grenade" ADD CONSTRAINT "Grenade_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "Movement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grenade" ADD CONSTRAINT "Grenade_techniqueId_fkey" FOREIGN KEY ("techniqueId") REFERENCES "Technique"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
