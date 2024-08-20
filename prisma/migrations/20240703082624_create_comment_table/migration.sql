/*
  Warnings:

  - You are about to drop the `Chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_refId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_refCommentId_fkey";

-- DropTable
DROP TABLE "Chapter";

-- DropTable
DROP TABLE "Comment";

-- CreateTable
CREATE TABLE "Chapters" (
    "id" SERIAL NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "refId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "subTitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "docsUrl" TEXT[],
    "good" INTEGER NOT NULL,
    "bad" INTEGER NOT NULL,
    "new" BOOLEAN NOT NULL,
    "newest" BOOLEAN NOT NULL,
    "banned" BOOLEAN NOT NULL,
    "recommend" BOOLEAN NOT NULL,
    "embYt" TEXT NOT NULL,
    "embYtTime" TEXT NOT NULL,
    "embRumble" TEXT NOT NULL,
    "embRumbleTime" TEXT NOT NULL,
    "embVimeo" TEXT NOT NULL,
    "embVimeoTime" TEXT NOT NULL,
    "embRec" TEXT NOT NULL,
    "embRecTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayDate" TEXT NOT NULL,
    "tags" TEXT[],
    "comment" TEXT[],

    CONSTRAINT "Chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "commentId" SERIAL NOT NULL,
    "refCommentId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "good" INTEGER NOT NULL,
    "bad" INTEGER NOT NULL,
    "new" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responses" TEXT[],

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_refId_fkey" FOREIGN KEY ("refId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_refCommentId_fkey" FOREIGN KEY ("refCommentId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
