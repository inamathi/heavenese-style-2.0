/*
  Warnings:

  - A unique constraint covering the columns `[episodeId]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Episode_episodeId_key" ON "Episode"("episodeId");
