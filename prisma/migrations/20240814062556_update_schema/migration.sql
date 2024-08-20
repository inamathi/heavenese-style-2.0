-- CreateTable
CREATE TABLE "SectionCarousel" (
    "id" SERIAL NOT NULL,
    "index" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "linkUrl" TEXT NOT NULL,
    "newFlag" BOOLEAN NOT NULL,

    CONSTRAINT "SectionCarousel_pkey" PRIMARY KEY ("id")
);
