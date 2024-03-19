"use server";

import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const currentProfile = async () => {
  const { userId }: any = auth();

  if (!userId) {
    return null;
  }

  const profile = await db.user.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
