import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, tesScore } = body;

  try {
    let existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { tesResults: true },
    });
    if (
      existingUser &&
      existingUser.tesResults &&
      existingUser.tesResults.length > 0
    ) {
      const updatedUserStats = await prisma.tesResult.update({
        where: { id: existingUser.tesResults[0].id },
        data: {
          tesScore: existingUser.tesResults[0].tesScore + tesScore,
        },
      });
      return NextResponse.json({ updatedUserStats });
    } else {
      const newUser = await prisma.user.update({
        where: { id: userId },
        data: {
          tesResults: { create: { tesScore: tesScore } },
        },
      });
      return NextResponse.json({ newUser });
    }
  } catch (error) {
    console.error(error);
    return;
  }
}
