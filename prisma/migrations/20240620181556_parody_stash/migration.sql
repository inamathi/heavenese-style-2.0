/*
  Warnings:

  - Added the required column `type` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Parody` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parody" ADD COLUMN     "type" TEXT NOT NULL;
