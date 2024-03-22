"use client";

import React from "react";

import { HandHeart, Lock } from "lucide-react";

import { Switch } from "@/components/ui/switch";

const SupportSettings = () => {
  return (
    <div className={"flex flex-col gap-2"}>
      <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
        <HandHeart className={"!text-white"} />
        Support banner
      </h2>
      <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
        <div className={"mb-5 flex items-center justify-between"}>
          <p className={"flex items-center gap-2 text-xl text-white"}>
            Show your support
            <Lock size={20} />
          </p>
          <Switch disabled={true} id="airplane-mode" />
        </div>
        <p className={"text-white"}>Show your support for important causes with a profile banner. Only one banner can be active at a time.</p>
      </div>
    </div>
  );
};

export default SupportSettings;
