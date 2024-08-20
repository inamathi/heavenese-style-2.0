/*
  Warnings:

  - The primary key for the `Episode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `chapterId` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refId` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "chapterId" INTEGER NOT NULL,
ADD COLUMN     "comment" TEXT[],
ADD COLUMN     "refId" INTEGER NOT NULL,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_pkey",
ADD CONSTRAINT "Episode_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_refId_fkey" FOREIGN KEY ("refId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
