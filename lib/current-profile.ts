"use server";

import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const currentProfile = async (): Promise<User | null> => {
  const userId = auth()?.userId;

  if (!userId) {
    return null;
  }

  const profile: any = await db.user.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
