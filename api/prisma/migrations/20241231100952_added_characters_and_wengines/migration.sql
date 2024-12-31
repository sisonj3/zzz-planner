-- CreateEnum
CREATE TYPE "Attribute" AS ENUM ('FIRE', 'ICE', 'ELECTRIC', 'ETHER', 'PHYSICAL');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ATTACK', 'ANOMALY', 'STUN', 'SUPPORT', 'DEFENDER');

-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('S', 'A', 'B');

-- CreateEnum
CREATE TYPE "Weekly" AS ENUM ('BUTCHER');

-- CreateEnum
CREATE TYPE "Expert" AS ENUM ('DULLAHAN');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "rank" "Rank" NOT NULL,
    "role" "Role" NOT NULL,
    "attribute" "Attribute" NOT NULL,
    "weekly" "Weekly" NOT NULL,
    "expert" "Expert" NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wengine" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "rank" "Rank" NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Wengine_pkey" PRIMARY KEY ("id")
);
