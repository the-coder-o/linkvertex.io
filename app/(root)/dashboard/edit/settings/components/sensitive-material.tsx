"use client";

import React from "react";

import { CircleMinus } from "lucide-react";

import { Switch } from "@/components/ui/switch";

const SensitiveMaterial = () => {
  return (
    <div className={"flex flex-col gap-2"}>
      <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
        <CircleMinus className={"!text-white"} />
        Sensitive material
      </h2>
      <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
        <div className={"mb-5 flex justify-between"}>
          <p className={"text-white"}>Display a sensitive content warning before visitors can view your profile.</p>
          <Switch disabled={true} id="airplane-mode" />
        </div>
      </div>
    </div>
  );
};

export default SensitiveMaterial;
