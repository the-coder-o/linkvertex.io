import React from "react";

import { cn } from "@/utils/cn";
import { UserButton } from "@clerk/nextjs";

import { useUser } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";

export const UserControls = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div className={"flex h-[32px] w-[32px] items-center"}>
      <div className={cn("h-[32px] w-[32px] ", isSignedIn ? "block" : "hidden")}>
        <UserButton afterSignOutUrl="/" />
        <Skeleton className={`h-[33px] w-[33px] rounded-full bg-white/10 ${isLoaded ? "hidden" : "block"}`} />
      </div>
    </div>
  );
};
