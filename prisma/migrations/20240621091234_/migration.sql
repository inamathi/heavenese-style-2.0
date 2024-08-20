/*
  Warnings:

  - The `docsUrl` column on the `Chapter` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `good` on the `Chapter` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "docsUrl",
ADD COLUMN     "docsUrl" TEXT[],
DROP COLUMN "good",
ADD COLUMN     "good" INTEGER NOT NULL;
