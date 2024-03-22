"use client";

import React from "react";

import { ScanSearch } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SeoOptimizing = () => {
  return (
    <div className={"flex flex-col gap-2"}>
      <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
        <ScanSearch className={"h-5 w-5 !text-white"} />
        Seo optimizing
      </h2>
      <div>
        <div className={"flex flex-col gap-5"}>
          <div>
            <Input disabled={true} type="text" placeholder={"Example: @the_coder_o"} className={"mt-[0.5rem] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} id="hs-inline-add-on" name="hs-inline-add-on" />
          </div>
          <div>
            <Textarea disabled={true} placeholder={"Example: Linktree. Make your link do more. Changes to metadata may take some time to appear on other platforms."} className={" mt-[0.5rem] h-[150px] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] !pt-[16px] text-[1rem] text-white !outline-none placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoOptimizing;
