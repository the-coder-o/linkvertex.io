"use client";

import React from "react";

import { ShieldAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ArchiveButton from "@/app/(root)/dashboard/edit/settings/components/archive";
import MailingList from "@/app/(root)/dashboard/edit/settings/components/mailing-list";
import SeoOptimizing from "@/app/(root)/dashboard/edit/settings/components/seo-optimizing";
import ThemeSettings from "@/app/(root)/dashboard/edit/settings/components/theme-settings";
import SupportSettings from "@/app/(root)/dashboard/edit/settings/components/support-settings";
import SensitiveMaterial from "@/app/(root)/dashboard/edit/settings/components/sensitive-material";

const Page = () => {
  return (
    <>
      <head>
        <title>Settings | linkvretex.io</title>
      </head>
      <div>
        <Alert className="mb-3 w-full rounded-[24px] border-transparent !bg-[#90CDF4]">
          <ShieldAlert className="flex items-center justify-center rounded-full bg-[#000] p-[4px] !text-white" />
          <AlertTitle className="ml-2 text-black">Coming Soon, will be open in v:2.0.0</AlertTitle>
          <AlertDescription className="ml-2 text-[16px] font-medium text-black">Streamlined link management with engagement and privacy tools.🥰</AlertDescription>
        </Alert>
        <div className={"flex flex-col gap-10"}>
          <ThemeSettings />
          <SeoOptimizing />
          <MailingList />
          <SupportSettings />
          <SensitiveMaterial />
          <ArchiveButton />
        </div>
      </div>
    </>
  );
};

export default Page;
