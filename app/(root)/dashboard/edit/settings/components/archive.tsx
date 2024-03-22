"use client";

import React from "react";

import { Archive } from "lucide-react";

import { Button } from "@/components/ui/button";

const ArchiveButton = () => {
  return (
    <div className={"flex flex-col gap-2"}>
      <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
        <Archive className={"!text-white"} />
        Archive
      </h2>
      <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
        <div className={"flex flex-col justify-between gap-3"}>
          <p className={"text-white"}>Move all your inactive links to the archive and keep their analytics data.</p>
          <Button disabled={true} className={"rounded-[21px] !bg-[#90CDF4] text-[16px] font-bold text-black hover:!bg-[#90CDF4]/90"}>
            Archive all inactive links
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArchiveButton;
