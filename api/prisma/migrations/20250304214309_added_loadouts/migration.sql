/*
  Warnings:

  - Added the required column `loadouts` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "loadouts" JSONB NOT NULL;
