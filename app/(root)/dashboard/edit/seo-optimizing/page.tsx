"use client";

import React from "react";

import { ShieldAlert } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SeoAlert from "@/app/(root)/dashboard/edit/seo-optimizing/components/seo-alert";

const Page = () => {
  const { t } = useTranslation("seo_page");

  return (
    <>
      <head>
        <title>SEO optimizing | Linkvertex</title>
      </head>
      <div>
        <Alert className="mb-8 w-full rounded-[24px] border-transparent !bg-[#1E2B32]">
          <ShieldAlert className="flex items-center justify-center rounded-full bg-[#90CDF4] p-[4px]" />
          <AlertTitle className="ml-2 text-white">{t("alert_message_title")}</AlertTitle>
          <AlertDescription className="ml-2 text-[16px] font-medium text-white">{t("alert_message_text")}</AlertDescription>
        </Alert>
        <div className={"flex flex-col gap-5"}>
          <div>
            <label className={"text-md text-start font-medium text-white"}>Meta title</label>
            <Input disabled={true} type="text" placeholder={"Example: @the_coder_o"} className={"mt-[0.5rem] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} id="hs-inline-add-on" name="hs-inline-add-on" />
          </div>
          <div>
            <label className={"text-md text-start font-medium text-white"}>Meta description</label>
            <Textarea disabled={true} placeholder={"Example: Linktree. Make your link do more. Changes to metadata may take some time to appear on other platforms."} className={" mt-[0.5rem] h-[150px] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] !pt-[16px] text-[1rem] text-white !outline-none placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} />
          </div>
        </div>
        <SeoAlert />
      </div>
    </>
  );
};

export default Page;
