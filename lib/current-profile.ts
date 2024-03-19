import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const currentProfile = async () => {
  const userId = auth()?.userId;

  if (!userId || typeof userId !== "string") {
    return null;
  }

  const profile: any = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  return profile;
};
