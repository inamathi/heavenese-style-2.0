-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_episodeId_fkey";

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_refCommentId_fkey" FOREIGN KEY ("refCommentId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
