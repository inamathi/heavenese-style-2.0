import { PrismaClient } from "@prisma/client";
import prisma from "../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // 投稿量が多い場合はfindManyでなく、件数を指定して読み込む
  const allUser = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  return NextResponse.json(allUser);
}

// export async function POST(req: Request) {
//   const { episodeId, title, thumbnail, description } = await req.json();
//   const episodeContents = await prisma.episode.create({
//     data: {
//       episodeId,
//       title,
//       thumbnail,
//       description,
//     },
//   });
//   return NextResponse.json(episodeContents);
// }
