import { PrismaClient } from "@prisma/client";
import prisma from "../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // 投稿量が多い場合はfindManyでなく、件数を指定して読み込む
  const allParodyData = await prisma.parody.findMany();
  return NextResponse.json(allParodyData);
}

export async function POST(req: Request) {
  const { username, title, thumbnail, description } = await req.json();
  const parodydata = await prisma.parody.create({
    data: {
      username,
      title,
      thumbnail,
      description,
    },
  });
  return NextResponse.json(parodydata);
}
