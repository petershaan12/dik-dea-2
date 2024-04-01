import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, tesScore } = body;

  try {
    const newUser = await prisma.user.update({
      where: { id: userId },
      data: {
        tesResults: { create: { tesScore: tesScore } },
      },
    });
    return NextResponse.json({ newUser });
  } catch (error) {
    console.error(error);
    return;
  }
}
