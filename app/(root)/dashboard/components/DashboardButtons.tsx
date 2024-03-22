"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { CircleCheck, Copy, Earth } from "lucide-react";

import { toast } from "sonner";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { currentProfile } from "@/lib/current-profile";
import DashboardLink from "@/app/(root)/dashboard/components/DashboardPageLink";

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
      <div className="ease rounded-[24px] border border-[#fff]/50 p-[20px] duration-200 hover:scale-105 max-[450px]:p-[15px]">
        <div className="flex flex-col gap-[35px] max-sm:w-full max-sm:flex-row max-sm:justify-between">
          <Link href={`/${profile?.id}`} className="flex h-full w-full items-center justify-between">
            <h2 className="ml-2 text-xl font-bold text-[#fff] max-[450px]:text-[20px]">Your Page</h2>
          </Link>
          <Button onClick={() => toast("Your linkvertex.io URL (https://linkvertex.io/hacker) have been copied!", { className: "!border-2 !border-[#90CDF4] !bg-[#90CDF4] !text-black", icon: <CircleCheck className={"-mt-3 h-5 w-5"} /> })} className="flex h-8 w-[100px] items-center gap-2 rounded-[24px] border border-[#81e6d9] bg-transparent px-[12px] text-sm font-bold text-[#fff] hover:bg-[#81e6d9]/10">
            <Copy className="h-3.5 w-3.5" />
            Copy
          </Button>
        </div>
      </div>
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
      <DashboardLink href="/dashboard/social-icons" label={t("page3")} icon={<Earth className={"text-white"} />} />
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
