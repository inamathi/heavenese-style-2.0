-- CreateTable
CREATE TABLE "Org" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "subTitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
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

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "subTitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "docsUrl" TEXT NOT NULL,
    "good" TEXT NOT NULL,
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

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);
