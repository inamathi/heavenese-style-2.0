/*
  Warnings:

  - You are about to drop the `Org` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Org";

-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "subTitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "docsUrl" TEXT NOT NULL,
    "good" INTEGER NOT NULL,
    "bad" INTEGER NOT NULL,
    "new" BOOLEAN NOT NULL,
    "newest" BOOLEAN NOT NULL,
    "banned" BOOLEAN NOT NULL,
    "recommend" BOOLEAN NOT NULL,
    "embYt" TEXT NOT NULL,
    "embRumble" TEXT NOT NULL,
    "embVimeo" TEXT NOT NULL,
    "embRec" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayDate" TEXT NOT NULL,
    "tags" TEXT[],
    "comment" TEXT[],

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parody" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "parodyId" INTEGER NOT NULL,
    "subTitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "docsUrl" TEXT NOT NULL,
    "good" INTEGER NOT NULL,
    "bad" INTEGER NOT NULL,
    "new" BOOLEAN NOT NULL,
    "newest" BOOLEAN NOT NULL,
    "banned" BOOLEAN NOT NULL,
    "recommend" BOOLEAN NOT NULL,
    "embYt" TEXT NOT NULL,
    "embRumble" TEXT NOT NULL,
    "embVimeo" TEXT NOT NULL,
    "embRec" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayDate" TEXT NOT NULL,
    "tags" TEXT[],
    "comment" TEXT[],

    CONSTRAINT "Parody_pkey" PRIMARY KEY ("id")
);
