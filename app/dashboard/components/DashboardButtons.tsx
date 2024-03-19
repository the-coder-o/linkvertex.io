"use client";

import React, { useEffect, useState } from "react";

import { Copy } from "lucide-react";

import { useTranslation } from "react-i18next";
import { currentProfile } from "@/lib/current-profile";

import { Button } from "@/components/ui/button";
import DashboardLink from "@/app/dashboard/components/DashboardPageLink";

const DashboardButtons = () => {
  const { t } = useTranslation("dashboard");
  const [profile, setProfile] = useState<any | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData: any | null = await currentProfile();
        setProfile(profileData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
      <DashboardLink
        href={`/${profile?.id}`}
        label={t("page1")}
        buttonContent={
          <Button className="flex h-8 w-[100px] items-center gap-2 rounded-[24px] border border-[#81e6d9] bg-transparent px-[12px] text-sm font-bold text-[#fff] hover:bg-[#81e6d9]/10">
            <Copy className="h-3.5 w-3.5" />
            Copy
          </Button>
        }
      />
      <DashboardLink
        href="/dashboard/edit/links"
        label={t("page2")}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" color={"#fff"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        }
      />
      <DashboardLink
        href="/dashboard/profile"
        label={t("page3")}
        icon={
          <svg stroke="currentColor" fill="currentColor" width="30" height="30" color={"#fff"} strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-2z0lkw" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path>
          </svg>
        }
      />
      <DashboardLink
        href="/dashboard/analytics"
        label={t("page4")}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pie-chart">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
          </svg>
        }
      />
    </div>
  );
};

export default DashboardButtons;
