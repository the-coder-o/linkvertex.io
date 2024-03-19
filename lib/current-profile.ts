"use server";

import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile: any = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  return profile;
};
