"use server";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const fetchUsers = async () => {
  try {
    const clerkUser = await currentUser();
    // if (!clerkUser) return console.log("belum login cok");
    // console.log(clerkUser);
    let mongoUser = null;
    mongoUser = await prisma.user.findUnique({
      where: {
        clerkUserId: clerkUser?.id,
      },
    });

    if (!mongoUser) {
      let username = clerkUser?.username;
      if (!username) {
        username = clerkUser?.firstName + " " + clerkUser?.lastName;
      }
      const newUser: any = {
        clerkUserId: clerkUser?.id,
        username,
        email: clerkUser?.emailAddresses[0].emailAddress,
        profilePic: clerkUser?.imageUrl,
      };
      mongoUser = await prisma.user.create({
        data: newUser,
      });
    }

    const tesResults = await prisma.tesResult.findMany({
      where: {
        userId: mongoUser.id,
      },
    });

    return {
      data: {
        user: mongoUser,
        tesResults,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
