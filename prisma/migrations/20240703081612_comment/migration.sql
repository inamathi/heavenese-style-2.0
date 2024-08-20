-- AlterTable
CREATE SEQUENCE comment_commentid_seq;
ALTER TABLE "Comment" ALTER COLUMN "commentId" SET DEFAULT nextval('comment_commentid_seq');
ALTER SEQUENCE comment_commentid_seq OWNED BY "Comment"."commentId";
