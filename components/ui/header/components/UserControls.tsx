import React from "react";

import { cn } from "@/utils/cn";
import { UserButton } from "@clerk/nextjs";

import { useUser } from "@clerk/clerk-react";

export const UserControls = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div className={"flex h-[32px] w-[32px] items-center"}>
      <div className={cn("h-[32px] w-[32px] ", isSignedIn ? "block" : "hidden")}>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
