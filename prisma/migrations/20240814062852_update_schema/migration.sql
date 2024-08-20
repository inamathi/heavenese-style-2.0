/*
  Warnings:

  - You are about to drop the `SectionCarousel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SectionCarousel";

-- CreateTable
CREATE TABLE "RecommendCarousel" (
    "id" SERIAL NOT NULL,
    "index" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "linkUrl" TEXT NOT NULL,
    "newFlag" BOOLEAN NOT NULL,

    CONSTRAINT "RecommendCarousel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecommendCarousel_index_key" ON "RecommendCarousel"("index");
