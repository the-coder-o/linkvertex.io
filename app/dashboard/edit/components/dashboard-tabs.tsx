"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

import ComingSoon from "@/assets/dashboard/coming-soon.png";
import Animation from "@/components/animation/framer-animaion";

const DashboardTabs = () => {
  const pathname = usePathname();
  const { t } = useTranslation("edit_link_page");

  return (
    <Animation delay={2} className={"mb-[20px] flex items-center gap-6 border-b-2 border-b-white/40"}>
      <Link href={"/dashboard/edit/links"} className={cn("flex cursor-pointer items-center gap-1 text-white max-sm:justify-between max-sm:text-[15.5px]", pathname === "/dashboard/edit/links" ? "border-b-2" : "border-b-transparent")}>
        {t("tab1")}
      </Link>
      <Link href={"/dashboard/edit/themes"} className={cn("flex cursor-pointer items-center gap-1 text-white max-sm:justify-between max-sm:text-[15.5px]", pathname === "/dashboard/edit/themes" ? "border-b-2" : "border-b-transparent")}>
        {t("tab2")}
        <Image src={ComingSoon} alt={"ComingSoon"} width={20} height={20} />
      </Link>
      <Link href={"/dashboard/edit/seo-optimizing"} className={cn("flex cursor-pointer items-center gap-1 text-white max-sm:justify-between max-sm:text-[15.5px]", pathname === "/dashboard/edit/seo-optimizing" ? "border-b-2" : "border-b-transparent")}>
        {t("tab3")}
        <Image src={ComingSoon} alt={"ComingSoon"} width={20} height={20} />
      </Link>
      <Link href={"/dashboard/edit/subscribe"} className={cn("flex cursor-pointer items-center gap-1 text-white max-sm:justify-between max-sm:text-[15.5px]", pathname === "/dashboard/edit/subscribe" ? "border-b-2" : "border-b-transparent")}>
        {t("tab4")}
        <Image src={ComingSoon} alt={"ComingSoon"} width={20} height={20} />
      </Link>
    </Animation>
  );
};

export default DashboardTabs;
