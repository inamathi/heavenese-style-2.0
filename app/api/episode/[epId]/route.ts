import prisma from "../../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { epId: string } }
) {
  const epId = params.epId;
  const episodeDetailData = await prisma.episode.findUnique({
    // relationLoadStrategy: "join",
    where: {
      episodeId: parseInt(epId),
    },
    include: {
      chapters: true,
      comments: true,
    },
  });
  return NextResponse.json(episodeDetailData);
}
