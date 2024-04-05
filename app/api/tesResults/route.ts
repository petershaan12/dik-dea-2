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

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { resultId } = body;

  try {
    // Hapus hasil tes dari database menggunakan Prisma
    await prisma.tesResult.delete({
      where: { id: resultId },
    });

    return NextResponse.json({ message: "Test result deleted successfully" });
  } catch (error) {
    console.error(error);
    return;
  }
}