/*
  Warnings:

  - You are about to drop the column `comment` on the `Chapters` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_refCommentId_fkey";

-- AlterTable
ALTER TABLE "Chapters" DROP COLUMN "comment",
ADD COLUMN     "comments" TEXT[];

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("episodeId") ON DELETE RESTRICT ON UPDATE CASCADE;
