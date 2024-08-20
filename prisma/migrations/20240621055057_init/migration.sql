/*
  Warnings:

  - The primary key for the `Episode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `type` on table `Parody` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_pkey",
ADD CONSTRAINT "Episode_pkey" PRIMARY KEY ("episodeId");

-- AlterTable
ALTER TABLE "Parody" ALTER COLUMN "type" SET NOT NULL;
