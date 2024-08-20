/*
  Warnings:

  - You are about to drop the column `comment` on the `Episode` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `Parody` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "comment";

-- AlterTable
ALTER TABLE "Parody" DROP COLUMN "comment";

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "refCommentId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "good" INTEGER NOT NULL,
    "bad" INTEGER NOT NULL,
    "new" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responses" TEXT[],

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_refCommentId_fkey" FOREIGN KEY ("refCommentId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
