"use client";

import Link from "next/link";

import React, { ReactNode, useState } from "react";

import { useUser } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";

import { ChevronLeft, Eye, EyeOff } from "lucide-react";

import Animation from "@/components/animation/framer-animaion";
import { DataProvider } from "@/app/(root)/dashboard/edit/edit-context";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Loader from "@/components/loader";
import Phone from "@/app/(root)/dashboard/edit/components/phone";
import DashboardTabs from "@/app/(root)/dashboard/edit/components/dashboard-tabs";

const EditPage = ({ children }: { children: ReactNode }) => {
  const { isLoaded } = useUser();

  const { t } = useTranslation("edit_link_page");
  const [showed, setShowed] = useState(false);

  const handleShowed = () => {
    setShowed(true);
  };

  const handleNotShowed = () => {
    setShowed(false);
  };

  if (isLoaded) {
    return (
      <>
        <head>
          <title>Edit | Linkvertex</title>
        </head>
        <DataProvider>
          <div className="container">
            <div className="relative mb-[100px] mt-[100px]">
              <Animation delay={0}>
                <Link href={"/dashboard"} className="flex w-[13%] items-center justify-center rounded-[24px] bg-[#1D1F1F]/80 py-[8px] pr-[10px] text-[16px] font-[500] text-white transition-all hover:bg-[#1D1F1F] max-sm:w-[100px]">
                  <ChevronLeft className="h-5 w-5 font-bold" /> {t("back_btn")}
                </Link>
              </Animation>
              <Animation delay={1}>
                <div className="mb-[3rem]">
                  <h2 className="main-text-animation my-[16px] text-4xl font-bold max-sm:text-[30px]">{t("title")}</h2>
                </div>
              </Animation>
              <DashboardTabs />
              <Animation delay={3} className={"flex justify-between gap-[30px] max-md:gap-0"}>
                {children}
                <div className={cn("max-md:fixed max-md:left-0 max-md:right-0 max-md:top-0 max-md:z-[99999999]", showed === true ? "max-md:block" : "max-md:hidden")}>
                  <Phone />
                </div>
              </Animation>
              <div className={"hidden max-md:block"}>
                <div className={"flex items-center justify-center"}>
                  {!showed ? (
                    <Button onClick={handleShowed} className={"fixed bottom-4 flex items-center gap-2 rounded-[22px] bg-[#fff] px-[25px] text-xl font-bold text-black hover:bg-[#fff]"}>
                      <Eye /> Preview
                    </Button>
                  ) : (
                    <Button onClick={handleNotShowed} className={"fixed bottom-4 z-[9999999999999] flex items-center gap-2 rounded-[22px] bg-[#fff] px-[25px] text-xl font-bold text-black hover:bg-[#fff]"}>
                      <EyeOff /> Hide
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DataProvider>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default EditPage;
